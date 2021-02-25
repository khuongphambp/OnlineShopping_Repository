using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OnlineShop.Data;
using Volo.Abp.DependencyInjection;

namespace OnlineShop.EntityFrameworkCore
{
    public class EntityFrameworkCoreOnlineShopDbSchemaMigrator
        : IOnlineShopDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreOnlineShopDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the OnlineShopMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<OnlineShopMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}