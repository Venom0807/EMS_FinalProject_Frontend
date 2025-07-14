import React, { useState } from "react";

const eventImages = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    caption: "Elegant Wedding Ceremony"
  },
  {
    url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    caption: "Corporate Gala Night"
  },
  {
    url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=600&q=80",
    caption: "Birthday Bash"
  },
  {
    url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    caption: "Outdoor Concert"
  },
  {
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    caption: "Engagement Party"
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    caption: "Charity Fundraiser"
  },
];

function Gallery() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Event Gallery</h2>
      <div className="row g-4">
        {eventImages.map((img, idx) => (
          <div className="col-12 col-sm-6 col-md-4" key={idx}>
            <div className="card shadow-sm h-100 border-0">
              <img
                src={img.url}
                alt={img.caption}
                className="card-img-top rounded gallery-img"
                style={{ height: "220px", objectFit: "cover", cursor: "pointer" }}
                onClick={() => setModalImg(img)}
              />
              <div className="card-body">
                <p className="card-text text-center fw-semibold">{img.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {modalImg && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.7)" }}
          tabIndex="-1"
          onClick={() => setModalImg(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0">
                <h5 className="modal-title">{modalImg.caption}</h5>
                <button type="button" className="btn-close" onClick={() => setModalImg(null)}></button>
              </div>
              <div className="modal-body p-0">
                <img
                  src={modalImg.url}
                  alt={modalImg.caption}
                  className="w-100 rounded-bottom"
                  style={{ maxHeight: "60vh", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
