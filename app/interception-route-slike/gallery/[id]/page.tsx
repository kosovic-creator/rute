export default async function ImagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <h1>Puna stranica za sliku {id}</h1>
      <p>Ovo je puna stranica kada se direktno pristupi URL-u.</p>
      <p>Slika ID: {id}</p>
    </div>
  );
}
