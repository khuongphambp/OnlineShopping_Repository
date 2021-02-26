using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace OnlineShop.Bookss
{
    public class Book : AuditedAggregateRoot<Guid>
    {
        public int BookId { get; set; }
        public string  BookName { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
    }
}
