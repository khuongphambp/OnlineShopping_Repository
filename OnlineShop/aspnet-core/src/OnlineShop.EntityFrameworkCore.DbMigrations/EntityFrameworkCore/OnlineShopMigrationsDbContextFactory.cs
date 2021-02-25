using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace OnlineShop.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class OnlineShopMigrationsDbContextFactory : IDesignTimeDbContextFactory<OnlineShopMigrationsDbContext>
    {
        public OnlineShopMigrationsDbContext CreateDbContext(string[] args)
        {
            OnlineShopEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<OnlineShopMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new OnlineShopMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../OnlineShop.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
