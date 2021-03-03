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
        [Route("getbook")]
        public IActionResult GetBook()
        {
            var listbooks = _productService.GetAllBook();

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
