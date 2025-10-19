'use client';

import { useState } from 'react';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7245';

    try {
      const response = await fetch(`${apiUrl}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price,
          stock,
        }),
      });

      if (response.ok) {
        setMessage('✅ Ürün başarıyla eklendi!');
        setName('');
        setDescription('');
        setPrice(0);
        setStock(0);
      } else {
        const errorText = await response.text();
        setMessage(`❌ Hata: ${errorText}`);
      }
    } catch (error) {
      console.error('Ürün ekleme hatası:', error);
      setMessage('❌ Sunucuya bağlanılamadı.');
    }
  };

  return (
    <main className="p-8">
      {/* Navbar KALDIRILDI - zaten layout'ta var */}
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Yeni Ürün Ekle</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Ürün Adı</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Açıklama</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Fiyat (₺)</label>
            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value === '' ? 0 : parseFloat(e.target.value))
              }
              required
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Stok Miktarı</label>
            <input
              type="number"
              value={stock}
              onChange={(e) =>
                setStock(e.target.value === '' ? 0 : parseInt(e.target.value))
              }
              required
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            Ürün Ekle
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center font-medium text-gray-700">{message}</p>
        )}
      </div>
    </main>
  );
}