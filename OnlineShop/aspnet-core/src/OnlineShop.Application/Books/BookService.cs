using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace OnlineShop.Books
{
    public class BookService : ApplicationService, IBookService
    {
        private readonly IRepository<Book, Guid> _repository;

        public BookService(IRepository<Book, Guid> repository)
        {
            _repository = repository;
        }

        public async Task<BookDto> GetBookById(Guid id)
        {
            var book = await _repository.FirstOrDefaultAsync(x => x.Id == id);

            return ObjectMapper.Map<Book, BookDto>(book);
        }

        public async Task<List<BookDto>> GetAllBook()
        {
            var books = await _repository.ToListAsync();


            return ObjectMapper.Map<List<Book>, List<BookDto>>(books);
        }

        public async Task<bool> CreateBook(CreateUpdateBookDto createUpdateBookDto)
        {
            try
            {
                var book = ObjectMapper.Map<CreateUpdateBookDto, Book>(createUpdateBookDto);
                await _repository.InsertAsync(book);

                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }

        public async Task<bool> UpdateBook(Guid id, CreateUpdateBookDto updateBookDto)
        {
            var book = await _repository.FirstOrDefaultAsync(x => x.Id == id);
            if (book != null)
            {
                book.BookName = updateBookDto.BookName;
                book.Price = updateBookDto.Price;
                book.Description = updateBookDto.Description;
                await _repository.UpdateAsync(book);
                return true;
            }

            return false;
        }

        public async Task<bool> DeleteBookById(Guid id)
        {
            try
            {
                await _repository.DeleteAsync(x => x.Id == id);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public BookAggregateDto GetBook(BookParameter parameter)
        {
            var count = _repository.Count();
            var toltalpage = (int)Math.Ceiling(count / (double)parameter.PageSize);
            var book = _repository.OrderBy(x => x.BookName).Skip((parameter.PageNumber - 1) * parameter.PageSize).Take(parameter.PageSize).ToList();

            var bookaggregateDto = new BookAggregateDto()
            {
                BookDtos = ObjectMapper.Map<List<Book>, List<BookDto>>(book),
                TotalPage = toltalpage
            };

            return bookaggregateDto;
        }
    }
}
