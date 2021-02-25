using OnlineShop.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace OnlineShop.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class OnlineShopController : AbpController
    {
        protected OnlineShopController()
        {
            LocalizationResource = typeof(OnlineShopResource);
        }
    }
}