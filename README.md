
---

##  Product Management System

Bu proje, **ASP.NET Core Web API (Backend)** ve **Next.js (Frontend)** kullanılarak geliştirilmiş basit bir ürün yönetim sistemidir.
Kullanıcılar ürün ekleme, listeleme, güncelleme ve silme işlemlerini kolayca gerçekleştirebilir.

---

###  Proje Yapısı

```
ProductApi/               → Backend (ASP.NET Core)
frontend/                 → Frontend (Next.js + TypeScript)
```

---

##  Özellikler

✅ Ürün listeleme
✅ Yeni ürün ekleme
✅ Ürün bilgilerini güncelleme
✅ Ürün silme
✅ API üzerinden JSON formatında veri alışverişi
✅ Modern kullanıcı arayüzü (TailwindCSS ile)

---

##  Teknolojiler

**Backend:**

* ASP.NET Core 8.0
* Entity Framework Core
* SQL Server
* Repository & Service katmanlı mimari

**Frontend:**

* Next.js 14 (App Router)
* TypeScript
* TailwindCSS
* Fetch API

---

##  Kurulum Adımları

### 1️⃣ Backend (ProductApi)

#### 🔹 Gereksinimler

* .NET 8 SDK
* Microsoft SQL Server

#### 🔹 Kurulum

```bash
# Proje dizinine gir
cd ProductApi

# Veritabanını oluştur
dotnet ef database update

# Uygulamayı başlat
dotnet run
```

Uygulama varsayılan olarak `https://localhost:7245` adresinde çalışır.
API endpoint’i:

```
https://localhost:7245/api/products
```

---

### 2️⃣ Frontend (Next.js)

#### 🔹 Gereksinimler

* Node.js 18+
* npm veya yarn

#### 🔹 Kurulum

```bash
# Frontend dizinine gir
cd frontend

# Gerekli paketleri yükle
npm install

# Ortam değişkeni ayarla
echo "NEXT_PUBLIC_API_URL=https://localhost:7245" > .env.local

# Geliştirme sunucusunu çalıştır
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

---

## API Endpoint’leri

| Metod  | Endpoint             | Açıklama                  |
| ------ | -------------------- | ------------------------- |
| GET    | `/api/products`      | Tüm ürünleri getirir      |
| GET    | `/api/products/{id}` | Belirli bir ürünü getirir |
| POST   | `/api/products`      | Yeni ürün oluşturur       |
| PUT    | `/api/products/{id}` | Ürünü günceller           |
| DELETE | `/api/products/{id}` | Ürünü siler               |

---

##  Örnek Ekranlar

* **Ürün Listesi:** Ürünlerin ad, açıklama, fiyat ve stok bilgileri listelenir.
* **Ürün Ekleme:** Form aracılığıyla yeni ürün eklenebilir.
* **Ürün Güncelleme / Silme:** Her ürünün yanında işlem butonları bulunur.

---

##  Geliştirici Bilgileri

**Proje Geliştiricisi:** Şule
**Backend:** ASP.NET Core
**Frontend:** Next.js
**Veritabanı:** SQL Server

---

---

##  Projeyi Çalıştırma Rehberi

Bu proje Entity Framework Core Migration yöntemiyle geliştirildiği için veritabanı ilk çalıştırmada otomatik olarak oluşturulabilir.

### 1️⃣ Gereksinimler
- .NET 8 SDK  
- Microsoft SQL Server veya SQL Server Express  
- Node.js 18+  
- NPM (veya Yarn)

---

### 2️⃣ Klonla
```bash
git clone https://github.com/Suleeo/ProductApi.git
cd ProductApi
````

---

### 3️⃣ Veritabanını Oluştur (EF Core Migration)

```bash
dotnet tool install --global dotnet-ef   # (eğer EF aracı yüklü değilse)
dotnet ef database update
```

>  Bu komut `appsettings.json` içindeki bağlantı bilgisine göre **ProductDb** veritabanını otomatik olarak oluşturur.

---

### 4️⃣ Backend’i Başlat

```bash
dotnet run
```

Uygulama şu adreste çalışır:
➡️ `https://localhost:7245`

---

### 5️⃣ Frontend’i Başlat

```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=https://localhost:7245" > .env.local
npm run dev
```

Tarayıcıda aç:
➡️ `http://localhost:3000`

### ✅ Test Edildiği Ortam

* **Backend:** ASP.NET Core 8.0
* **Frontend:** Next.js 14
* **Veritabanı:** SQL Server
* **OS:** Windows 10
* **IDE:** Visual Studio 2022 & VS Code

---

##  Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır.
Dilediğiniz gibi kullanabilir, geliştirebilir veya paylaşabilirsiniz.

---

