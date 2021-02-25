using System.Threading.Tasks;

namespace OnlineShop.Data
{
    public interface IOnlineShopDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
