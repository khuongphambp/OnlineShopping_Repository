using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace OnlineShop.EntityFrameworkCore
{
    [DependsOn(
        typeof(OnlineShopEntityFrameworkCoreModule)
        )]
    public class OnlineShopEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<OnlineShopMigrationsDbContext>();
        }
    }
}
