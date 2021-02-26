using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace OnlineShop.Books
{
    public class BookDto : AuditedEntityDto<Guid>
    {
        public int BookId { get; set; }
        public string BookName { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
    }
}
