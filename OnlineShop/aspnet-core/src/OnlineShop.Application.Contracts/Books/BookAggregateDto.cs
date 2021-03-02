using System.Collections.Generic;

namespace OnlineShop.Books
{
    public class BookAggregateDto
    {
        public List<BookDto> BookDtos { get; set; }
        public int TotalPage { get; set; }
    }
}
