using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace italoDouglasDevSite
{
    public class Program
    {

        //public static void Main(string[] args)
        //{
        //    CreateWebHostBuilder(args).Run();
        //}
        //public static IWebHost CreateWebHostBuilder(string[] args)
        //{
        //    var config = new ConfigurationBuilder()
        //    .AddJsonFile("appsettings.json", optional: true)
        //    .Build();

        //    return WebHost.CreateDefaultBuilder(args)
        //          .UseConfiguration(config)
        //          .UseKestrel()
        //          .UseContentRoot(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location))
        //          .UseStartup<Startup>()
        //          .Build();
        //}
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
