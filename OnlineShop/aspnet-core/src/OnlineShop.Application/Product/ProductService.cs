using OnlineShop.Books;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace OnlineShop.Product
{
    public class ProductService : ApplicationService, IProductService
    {
        private readonly IRepository _repository;

        public ProductService(IRepository repository)
        {
            _repository = repository;
        }

        public Task<BookDto> GetBook(Guid id)
        {
            throw new Exception();
        }
    }
}
