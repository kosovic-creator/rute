import { use } from 'react';

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = use(params);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Proizvod ID: {productId}
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Informacije o proizvodu sa ID: {productId}
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Dodaj u korpu
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { productId: '1' },
    { productId: '2' },
    { productId: '3' },
  ];
}



