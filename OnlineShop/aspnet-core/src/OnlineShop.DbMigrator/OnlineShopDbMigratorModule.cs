using OnlineShop.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace OnlineShop.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(OnlineShopEntityFrameworkCoreDbMigrationsModule),
        typeof(OnlineShopApplicationContractsModule)
        )]
    public class OnlineShopDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
