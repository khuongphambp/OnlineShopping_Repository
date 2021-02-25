using OnlineShop.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace OnlineShop.Permissions
{
    public class OnlineShopPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(OnlineShopPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(OnlineShopPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<OnlineShopResource>(name);
        }
    }
}
