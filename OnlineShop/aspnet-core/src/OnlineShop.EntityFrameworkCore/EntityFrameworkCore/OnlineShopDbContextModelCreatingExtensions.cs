using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace OnlineShop.EntityFrameworkCore
{
    public static class OnlineShopDbContextModelCreatingExtensions
    {
        public static void ConfigureOnlineShop(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(OnlineShopConsts.DbTablePrefix + "YourEntities", OnlineShopConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}