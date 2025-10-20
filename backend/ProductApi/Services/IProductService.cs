using ProductApi.DTOs;

namespace ProductApi.Services
{
    public interface IProductService
    {
        Task<IEnumerable<ProductReadDto>> GetAllAsync();
        Task<ProductReadDto> CreateAsync(ProductCreateDto dto);
        Task<ProductReadDto?> GetByIdAsync(int id);   // <-- bunu ekliyoruz
        Task<ProductReadDto?> UpdateAsync(int id, ProductUpdateDto dto);
        Task DeleteAsync(int id);

    }
}
