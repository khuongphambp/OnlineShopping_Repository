using AutoMapper;
using OnlineShop.Books;

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
