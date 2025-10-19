'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [message, setMessage] = useState('');

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7245';

  const fetchProducts = () => {
    fetch(`${apiUrl}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('API bağlantı hatası:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Bu ürünü silmek istediğine emin misin?')) return;
    try {
      const res = await fetch(`${apiUrl}/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessage('🗑️ Ürün silindi.');
        fetchProducts();
      } else {
        setMessage('❌ Ürün silinirken hata oluştu.');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Sunucuya bağlanılamadı.');
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      const res = await fetch(`${apiUrl}/api/products/${editingProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProduct),
      });

      if (res.ok) {
        setMessage('✏️ Ürün başarıyla güncellendi!');
        setEditingProduct(null);
        fetchProducts();
      } else {
        setMessage('❌ Güncelleme başarısız.');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Sunucuya bağlanılamadı.');
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Ürün Listesi</h1>

      {message && (
        <div className={`mb-6 p-4 rounded-md text-center font-medium ${
          message.includes('❌') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {message}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-lg text-gray-600">Yükleniyor...</div>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg mb-4">Henüz ürün bulunmamaktadır.</p>
          <a 
            href="/add-product" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200"
          >
            İlk Ürünü Ekle
          </a>
        </div>
      ) : (
        // Bu kısım değişti: Modern ürün kartları kullanılıyor
        <div className="grid gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ₺{product.price.toLocaleString('tr-TR')}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.stock > 10 
                          ? 'bg-blue-100 text-blue-800' 
                          : product.stock > 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        Stok: {product.stock}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingProduct && (
        <div className="fixed inset-0 bg-gray-950/5 px-2.5 py-1.5 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 hover:scale-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Ürünü Düzenle</h2>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="text-gray-400 hover:text-gray-600 transition duration-200 p-1 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ürün Adı
                  </label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Ürün adını giriniz"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Açıklama
                  </label>
                  <textarea
                    value={editingProduct.description || ''}
                    onChange={e => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Ürün açıklamasını giriniz"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fiyat (₺)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={editingProduct.price}
                        onChange={e =>
                          setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || 0 })
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        min="0"
                        step="0.01"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">₺</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stok Miktarı
                    </label>
                    <input
                      type="number"
                      value={editingProduct.stock}
                      onChange={e =>
                        setEditingProduct({ ...editingProduct, stock: parseInt(e.target.value) || 0 })
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      min="0"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-200"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}