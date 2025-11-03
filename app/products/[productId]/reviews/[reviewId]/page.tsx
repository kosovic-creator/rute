import { use } from 'react';

interface ReviewPageProps {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const { productId, reviewId } = use(params);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Proizvod ID: {productId}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Recenzija ID: {reviewId}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Detalji recenzije za proizvod {productId}, recenzija {reviewId}...
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
            Lajkuj recenziju
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            Prijavi recenziju
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Kombinujte productId i reviewId po potrebi za predgenerisanje
  return [
    { productId: '1', reviewId: 'a' },
    { productId: '1', reviewId: 'b' },
    { productId: '2', reviewId: 'c' }
  ];
}