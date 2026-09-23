function Gallery() {
     const galleryimages = [
        {
          id: 1,
          imag: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
        },
        {
          id: 2,
          imag: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80"
        },
        {
          id: 3,
          imag: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80"
        },
        {
          id: 4,
          imag: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80"
        },
        {
          id: 5,
          imag: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
        }
     ]
    return(
        <section className="gallery-section" id="gallery">
      <div className="gallery-grid">
          {galleryimages.map ((item) => (
            <div className="gallery-item" key={item.id}>
              <img src={item.imag} alt={item.imag} />
            </div>
          ))}
      </div>
      </section>
    );
}

export default Gallery;