using ProductApi.DTOs;
using ProductApi.Models;
using ProductApi.Repositories;

namespace ProductApi.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        public ProductService(IProductRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<ProductReadDto>> GetAllAsync()
        {
            var products = await _repository.GetAllAsync();
            return products.Select(p => new ProductReadDto
            {
                Id = p.Id,
                Name = p.Name,
                Description = p.Description,
                Price = p.Price,
                CreatedAt = p.CreatedAt
            });
        }

        public async Task<ProductReadDto> CreateAsync(ProductCreateDto dto)
        {
            var product = new Product
            {
                Name = dto.Name,
                Description = dto.Description,
                Price = dto.Price
            };

            var created = await _repository.AddAsync(product);

            return new ProductReadDto
            {
                Id = created.Id,
                Name = created.Name,
                Description = created.Description,
                Price = created.Price,
                CreatedAt = created.CreatedAt
            };
        }
    }
}
