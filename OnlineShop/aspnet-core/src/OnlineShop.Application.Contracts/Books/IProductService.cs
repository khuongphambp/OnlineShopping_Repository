using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace OnlineShop.Books
{
    public interface IProductService : IApplicationService
    {
        Task<BookDto> GetBook(Guid id);
    }
}
