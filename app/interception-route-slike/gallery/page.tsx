import Link from 'next/link';

export default function Gallery() {
  const images = [{ id: 'fotka1' }, { id: 'fotka2' }, { id: 'slika123' }];

  return (
    <div>
      <h1>Gallery</h1>
      {images.map((img) => (
        <Link
          key={img.id}
          href={`/interception-route-slike/gallery/${img.id}`}
        >
          Otvori sliku {img.id}.jpg
        </Link>
      ))}
    </div>
  );
}
