//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.HttpsPolicy;
//using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
//using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
//using System.Collections.Generic;
using COVID19MHApi.Models;

using Newtonsoft.Json.Serialization;
using System.Text.Json;
using System.Text.Json.Serialization;

// PURPOSE: Starts off the web API when it's first run. Where the Question and SuggestionSet DB Contexts are registered, as well as any options for JSON Serialization, and CORS Policy.

namespace COVID19MHApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /* Registers QuestionContext for injection and use InMemory DB */
            services.AddDbContext<QuestionContext>(opt =>
               opt.UseInMemoryDatabase("QuestionsList"));
            services.AddDbContext<SuggestionSetContext>(opt =>
               opt.UseInMemoryDatabase("SuggestionSetList"));
            //services.AddMvc();

            /* Enable CORS */
            services.AddCors(options => { 
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
                    //.AllowCredentials());
            });

            services.AddControllers()
                .AddNewtonsoftJson(options =>
                {
                    //options.UseMemberCasing();
                    //options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                });
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            /* CorsPolicy */
            app.UseCors("CorsPolicy");
            //app.UseMvc();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
