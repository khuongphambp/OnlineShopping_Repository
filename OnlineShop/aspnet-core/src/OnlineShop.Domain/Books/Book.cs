using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace OnlineShop.Books
{
    public class Book : AuditedAggregateRoot<Guid>
    {
        public string  BookName { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
    }
}
