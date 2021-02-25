using OnlineShop.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace OnlineShop
{
    [DependsOn(
        typeof(OnlineShopEntityFrameworkCoreTestModule)
        )]
    public class OnlineShopDomainTestModule : AbpModule
    {

    }
}