using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OnlineShop.Books;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc;

namespace OnlineShop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private readonly IBookService _productService;

        public BookController(IBookService productService)
        {
            _productService = productService;
        }


        [HttpGet]
        public IActionResult GetBook([FromQuery] BookParameter parameter)
        {
            var listbooks = _productService.GetBook(parameter);

            return Ok(listbooks);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<BookDto> GetBookById(Guid id)
        {
            var book = await _productService.GetBookById(id);
            return book;
        }

        [HttpPost]
        public IActionResult CreateBook(CreateUpdateBookDto createUpdateBookDto)
        {
            _productService.CreateBook(createUpdateBookDto);
            return Ok();
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateBook(Guid id ,CreateUpdateBookDto createUpdateBookDto)
        {
            _productService.UpdateBook(id,createUpdateBookDto);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteBookById(Guid id)
        {
            _productService.DeleteBookById(id);
            return Ok();
        }

        
    }
}
