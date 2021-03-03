using Microsoft.AspNetCore.Mvc;
using OnlineShop.Books;
using System;
using System.Threading.Tasks;

namespace OnlineShop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
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
        public async Task<IActionResult> GetBookById(Guid id)
        {
            var book = await _productService.GetBookById(id);
            return Ok(book);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook(CreateUpdateBookDto createUpdateBookDto)
        {
            var result = await _productService.CreateBook(createUpdateBookDto);
            return Ok(result);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateBook(Guid id ,CreateUpdateBookDto createUpdateBookDto)
        {
            var result = await _productService.UpdateBook(id,createUpdateBookDto);
            return Ok(result);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteBookById(Guid id)
        {
            var result = await _productService.DeleteBookById(id);
            return Ok(result);
        }
    }
}
