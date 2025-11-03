export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Product Page
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Ovo je stranica za proizvode. Ovde možete prikazati detalje proizvoda, katalog ili bilo koji sadržaj vezan za proizvode.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Pogledaj proizvode
          </button>
        </div>
      </div>
    </div>
  );
}