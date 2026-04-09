using Tapio.MaintenanceService.Client.WebApi;
using Tapio.Tadamo.Clients.WebApi;
using TadamoBasicApiClientConfig = Tapio.Tadamo.Clients.WebApi.BasicApiClientConfig;
using MaintenanceServiceBasicApiClientConfig = Tapio.MaintenanceService.Client.WebApi.BasicApiClientConfig;

namespace Tapio.Authentication.Samples;

/// <summary>
/// Authentication samples.
/// </summary>
public static class AuthenticationSamples
{
    /// <summary>
    /// Creates a Tadamo client using basic authentication and prints the tools count.
    /// </summary>
    /// <param name="subscriptionId">Customer's SubscriptionId.</param>
    /// <param name="applicationId">Application's ApplicationId (e.g. ToolManagerOffice).</param>
    /// <param name="authorizationKey">Authorization key.</param>
    public static async Task CreateTadamoClientWithBasicAuthentication(
        Guid subscriptionId,
        Guid applicationId,
        string authorizationKey)
    {
        var httpClient = new HttpClient();

        var basicApiClientConfig = new TadamoBasicApiClientConfig
        {
            ApplicationId = applicationId.ToString(),
            SubscriptionId = subscriptionId.ToString(),
            BaseUrl = "https://api.tapio.one/tadamo",
            Base64Hash = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(authorizationKey))
        };

        var tadamoApiClient = new TadamoApiClient(httpClient, basicApiClientConfig);

        try
        {
            var toolsCount = await tadamoApiClient.GetToolsCountAsync(subscriptionId);
            Console.WriteLine($"Tools count: {toolsCount}");
        }
        catch (TadamoApiException e) when (e.StatusCode == 401)
        {
            Console.WriteLine("Unauthorized: Please check your authorization key and credentials.");
        }
        catch (TadamoApiException e) when (e.StatusCode == 403)
        {
            Console.WriteLine("Forbidden: You do not have permission to access this resource.");
        }
        catch (TadamoApiException e)
        {
            Console.WriteLine($"API error ({e.StatusCode}): {e.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }

    /// <summary>
    /// Creates a MaintenanceService client using basic authentication and prints the maintenance tasks count.
    /// </summary>
    /// <param name="subscriptionId">Customer's SubscriptionId.</param>
    /// <param name="applicationId">Application's ApplicationId (e.g. ToolManagerOffice).</param>
    /// <param name="authorizationKey">Authorization key.</param>
    public static async Task CreateMaintenanceServiceClientWithBasicAuthentication(
        Guid subscriptionId,
        Guid applicationId,
        string authorizationKey)
    {
        var httpClient = new HttpClient();

        var basicApiClientConfig = new MaintenanceServiceBasicApiClientConfig
        {
            ApplicationId = applicationId.ToString(),
            SubscriptionId = subscriptionId.ToString(),
            BaseUrl = "https://api.tapio.one/maintenanceservice",
            Base64Hash = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(authorizationKey))
        };

        var maintenanceServiceApiClient = new MaintenanceServiceApiClient(httpClient, basicApiClientConfig);

        try
        {
            var tickets = await maintenanceServiceApiClient.SearchTicketsAsync(subscriptionId, new TicketsSearchRequest());
            Console.WriteLine($"Maintenance tickets count: {tickets.Data.Count}");
        }
        catch (MaintenanceServiceApiException e) when (e.StatusCode == 401)
        {
            Console.WriteLine("Unauthorized: Please check your authorization key and credentials.");
        }
        catch (MaintenanceServiceApiException e) when (e.StatusCode == 403)
        {
            Console.WriteLine("Forbidden: You do not have permission to access this resource.");
        }
        catch (MaintenanceServiceApiException e)
        {
            Console.WriteLine($"API error ({e.StatusCode}): {e.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
