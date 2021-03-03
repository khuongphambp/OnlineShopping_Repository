using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace OnlineShop.Books
{
    public interface IBookService : IApplicationService
    {
        Task<BookDto> GetBookById(Guid id);
        Task<List<BookDto>> GetAllBook();
        BookAggregateDto GetBook(BookParameter parameter);
        void CreateBook(CreateUpdateBookDto createUpdateBookDto);
        void UpdateBook(Guid id, CreateUpdateBookDto updateBookDto);
        void DeleteBookById(Guid id);

    }
}
