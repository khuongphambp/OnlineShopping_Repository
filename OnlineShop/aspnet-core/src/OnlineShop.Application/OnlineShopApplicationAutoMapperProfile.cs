using AutoMapper;
using OnlineShop.Books;
using OnlineShop.Bookss;

namespace OnlineShop
{
    public class OnlineShopApplicationAutoMapperProfile : Profile
    {
        public OnlineShopApplicationAutoMapperProfile()
        {
            CreateMap<Book, BookDto>();
            CreateMap<CreateUpdateBookDto, Book>();
        }
    }
}
