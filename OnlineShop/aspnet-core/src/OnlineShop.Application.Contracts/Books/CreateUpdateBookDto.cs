using System.ComponentModel.DataAnnotations;

namespace OnlineShop.Books
{
    public class CreateUpdateBookDto
    {
        [Required]
        public string BookName { get; set; }
        [Required]
        public float Price { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
