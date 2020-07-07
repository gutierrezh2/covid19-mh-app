using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

using COVID19MHApi.Models;
using Microsoft.Extensions.DependencyInjection;

namespace COVID19MHApi
{
    public class Program
    {
        /*public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });*/

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
