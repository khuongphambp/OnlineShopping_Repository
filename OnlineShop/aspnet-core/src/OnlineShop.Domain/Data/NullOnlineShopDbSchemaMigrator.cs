using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace OnlineShop.Data
{
    /* This is used if database provider does't define
     * IOnlineShopDbSchemaMigrator implementation.
     */
    public class NullOnlineShopDbSchemaMigrator : IOnlineShopDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}