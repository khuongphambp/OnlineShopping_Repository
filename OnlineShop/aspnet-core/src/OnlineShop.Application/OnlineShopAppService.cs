using System;
using System.Collections.Generic;
using System.Text;
using OnlineShop.Localization;
using Volo.Abp.Application.Services;

namespace OnlineShop
{
    /* Inherit your application services from this class.
     */
    public abstract class OnlineShopAppService : ApplicationService
    {
        protected OnlineShopAppService()
        {
            LocalizationResource = typeof(OnlineShopResource);
        }
    }
}
