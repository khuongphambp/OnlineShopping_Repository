using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace OnlineShop
{
    [Dependency(ReplaceServices = true)]
    public class OnlineShopBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "OnlineShop";
    }
}
