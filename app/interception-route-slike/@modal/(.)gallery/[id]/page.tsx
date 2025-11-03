/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function ImageModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  function closeModal() {
    // Pokušaj sa router.back() prvo
    router.back();

    // Ako se ne vrati, idi na gallery stranicu
    setTimeout(() => {
      router.push('/interception-route-slike/gallery');
    }, 100);
  }

  function handleBackdropClick(e: React.MouseEvent) {
    // Zatvori modal ako korisnik klikne na pozadinu
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
      }}
      onClick={handleBackdropClick}
    >
      <div style={{ background: 'white', padding: 20, borderRadius: 8 }}>
        <h2>Slika {id}</h2>
        <img src={`/images/${id}.jpg`} alt={`Slika ${id}`} style={{ maxWidth: '400px', height: 'auto' }} />
        <div style={{ marginTop: 10 }}>
          <button onClick={closeModal} style={{ padding: '8px 16px', marginRight: 10 }}>
            Zatvori
          </button>
          <button
            onClick={() => router.push('/interception-route-slike/gallery')}
            style={{ padding: '8px 16px' }}
          >
            Nazad na Gallery
          </button>
        </div>
      </div>
    </div>
  );
}
