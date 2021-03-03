using System;

namespace OnlineShop.Books
{
    public class BookDto 
    {
        public Guid Id { get; set; }
        public string BookName { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
    }
}
