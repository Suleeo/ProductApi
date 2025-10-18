# ProductApi
Bu proje, ASP.NET Core kullanýlarak geliþtirilmiþ basit bir ürün yönetim API’sidir.
Kullanýcýlar ürün ekleyebilir, listeleyebilir, güncelleyebilir ve silebilir. 
Katmanlý mimari (Controller - Service - Repository) ve DTO yapýsý ile geliþtirilmiþtir.

Özellikler

CRUD iþlemleri:

GET /api/products - Tüm ürünleri listeleme

GET /api/products/{id} - Belirli ürünü görüntüleme

POST /api/products - Yeni ürün ekleme

PUT /api/products/{id} - Mevcut ürünü güncelleme

DELETE /api/products/{id} - Ürünü silme

Katmanlý mimari (Controller - Service - Repository)

DTO yapýsý ile veri transferi

Entity Framework Core kullanarak veritabaný iþlemleri

Asenkron (async/await) metodlar

Swagger ile API dokümantasyonu ve test