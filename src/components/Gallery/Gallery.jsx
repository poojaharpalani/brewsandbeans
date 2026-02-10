import BackButton from "../common/BackButton";
import "./Gallery.css";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "https://images.unsplash.com/photo-1521305916504-4a1121188589",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  ];

  return (
    <>
    <BackButton/>
    <section className="gallery">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Cafe gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
