using AutoMapper;
using OnlineShop.Books;

namespace OnlineShop
{
    public class OnlineShopApplicationAutoMapperProfile : Profile
    {
        public OnlineShopApplicationAutoMapperProfile()
        {
            CreateMap<Book, BookDto>();
            CreateMap<PagedList<Book>, PagedList<BookDto>>();
            CreateMap<CreateUpdateBookDto, Book>();
        }
    }
}
