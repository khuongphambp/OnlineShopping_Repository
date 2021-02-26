using Microsoft.EntityFrameworkCore;
using OnlineShop.Bookss;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace OnlineShop.EntityFrameworkCore
{
    public static class OnlineShopDbContextModelCreatingExtensions
    {
        public static void ConfigureOnlineShop(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            builder.Entity<Book>(b =>
            {
                b.ToTable(OnlineShopConsts.DbTablePrefix + "Books", OnlineShopConsts.DbSchema);
                b.ConfigureByConvention(); //auto configure for the base class props
                b.HasKey(x=>x.BookId);
                b.Property(x=>x.BookId).UseIdentityColumn();
                //...
            });
        }
    }
}