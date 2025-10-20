import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Arka Plan Resmi */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/background.jpg")', // veya Unsplash URL'niz
        }}
      >
        {/* Daha koyu overlay - okunaklılık için */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Ana Başlık */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Ürün Yönetim Sistemi
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Profesyonel ürün yönetimi için modern ve kullanıcı dostu arayüz. 
            Ürünlerinizi kolayca yönetin, takip edin ve analiz edin.
          </p>

          {/* Ana Butonlar */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Ürünleri Görüntüle
            </Link>
            <Link
              href="/add-product"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Yeni Ürün Ekle
            </Link>
          </div>

          {/* Özellikler - Daha Okunaklı Kutucuklar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Kolay Yönetim */}
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kolay Yönetim</h3>
              <p className="text-gray-600 leading-relaxed">
                Ürünlerinizi kolayca ekleyin, düzenleyin ve silin. Kullanıcı dostu arayüz ile her şey elinizin altında.
              </p>
            </div>

            {/* Gerçek Zamanlı */}
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Gerçek Zamanlı</h3>
              <p className="text-gray-600 leading-relaxed">
                Değişiklikler anında kaydedilir, her zaman güncel. Canlı verilerle anlık takip yapın.
              </p>
            </div>

            {/* Güvenli */}
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Güvenli</h3>
              <p className="text-gray-600 leading-relaxed">
                Verileriniz güvende, sadece siz erişebilirsiniz. Gelişmiş güvenlik önlemleri ile korunur.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}