using ProductApi.DTOs;

namespace ProductApi.Services
{
	public interface IProductService
	{
		Task<IEnumerable<ProductReadDto>> GetAllAsync();
		Task<ProductReadDto> CreateAsync(ProductCreateDto dto);
	}
}
