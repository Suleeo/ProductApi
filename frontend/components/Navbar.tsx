'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/products" className="hover:underline">
        Ürün Listesi
      </Link>
      <Link href="/add-product" className="hover:underline">
        Yeni Ürün Ekle
      </Link>
    </nav>
  );
}
