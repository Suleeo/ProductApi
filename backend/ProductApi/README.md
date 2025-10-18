# ProductApi
Bu proje, ASP.NET Core kullan�larak geli�tirilmi� basit bir �r�n y�netim API�sidir.
Kullan�c�lar �r�n ekleyebilir, listeleyebilir, g�ncelleyebilir ve silebilir. 
Katmanl� mimari (Controller - Service - Repository) ve DTO yap�s� ile geli�tirilmi�tir.

�zellikler

CRUD i�lemleri:

GET /api/products - T�m �r�nleri listeleme

GET /api/products/{id} - Belirli �r�n� g�r�nt�leme

POST /api/products - Yeni �r�n ekleme

PUT /api/products/{id} - Mevcut �r�n� g�ncelleme

DELETE /api/products/{id} - �r�n� silme

Katmanl� mimari (Controller - Service - Repository)

DTO yap�s� ile veri transferi

Entity Framework Core kullanarak veritaban� i�lemleri

Asenkron (async/await) metodlar

Swagger ile API dok�mantasyonu ve test