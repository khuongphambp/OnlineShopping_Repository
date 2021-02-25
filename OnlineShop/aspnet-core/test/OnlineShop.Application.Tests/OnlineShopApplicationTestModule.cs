using Volo.Abp.Modularity;

namespace OnlineShop
{
    [DependsOn(
        typeof(OnlineShopApplicationModule),
        typeof(OnlineShopDomainTestModule)
        )]
    public class OnlineShopApplicationTestModule : AbpModule
    {

    }
}