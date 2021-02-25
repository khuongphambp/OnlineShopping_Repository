using Volo.Abp.Settings;

namespace OnlineShop.Settings
{
    public class OnlineShopSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(OnlineShopSettings.MySetting1));
        }
    }
}
