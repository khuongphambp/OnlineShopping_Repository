﻿using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

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
