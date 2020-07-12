using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using COVID19MHApi.Models;
using Microsoft.Extensions.DependencyInjection;

// PURPOSE: Initalizes the web API, grabbing the host, service provider, and the seeded data to start the web API.

namespace COVID19MHApi
{
    public class Program
    {
        // References: https://exceptionnotfound.net/ef-core-inmemory-asp-net-core-store-database/, https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/working-with-sql?view=aspnetcore-3.0&tabs=visual-studio

        public static void Main(string[] args) {
            // Get host that will host web app
            var host = CreateHostBuilder(args).Build();

            // Find the service layer within scope
            using (var scope = host.Services.CreateScope()) {
                // Get the instance of QuestionContext in our services layer
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<QuestionContext>();

                // Call the QuestionsDB to create sample data
                C19MHDatabase.Initialize(services);
            }

            // Continue to run the application
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }

     
}
