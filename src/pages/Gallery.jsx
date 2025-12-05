import React, { useState, useEffect } from "react";

// GalleryComponent.jsx
// Single-file React component (Tailwind CSS classes assumed available)
// Drop this file into your React app and ensure the images live at /img/galary/... or update paths.

export default function GalleryComponent() {
  const [active, setActive] = useState("parents");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image lists (update file names/paths as needed)
  const parentsImgs = [
    "/img/galary/g (1).webp",
    "/img/galary/g (2).webp",
    "/img/galary/g (3).webp",
    // add more images up to 20+
  ];

  const functionImgs = [
    "/img/galary/f (1).webp",
    "/img/galary/f (2).webp",
    "/img/galary/f (3).webp",
    // add more images for inauguration function
  ];

  const images = active === "parents" ? parentsImgs : functionImgs;

  useEffect(() => {
    function handleKey(e) {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, currentIndex]);

  function openLightbox(index) {
    setCurrentIndex(index);
    setLightboxOpen(true);
    // prevent background scrolling while modal open
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }

  function showNext() {
    setCurrentIndex((i) => (i + 1) % images.length);
  }

  function showPrev() {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero banner */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src="/img/g-bg.webp"
          alt="Our Story Banner"
          className="w-full h-56 object-cover story-hero-image"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-semibold">Gallery</h1>
        </div>
      </div>

      <section className="gallery-section">
        <div className="flex gap-3 mb-6 gallery-header">
          <button
            onClick={() => setActive("parents")}
            className={`gallery-btn px-4 py-2 rounded-lg transition-shadow shadow-sm focus:outline-none ${
              active === "parents"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            aria-pressed={active === "parents"}
          >
            Happy Parents
          </button>

          <button
            onClick={() => setActive("function")}
            className={`gallery-btn px-4 py-2 rounded-lg transition-shadow shadow-sm focus:outline-none ${
              active === "function"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            aria-pressed={active === "function"}
          >
            Inauguration Function
          </button>
        </div>

        <div
          id="gallery"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gallery-grid"
        >
          {images.map((src, idx) => (
            <div
              key={src + idx}
              className="gallery-item relative rounded overflow-hidden bg-gray-50 cursor-pointer"
            >
              <img
                src={src}
                alt={active === "parents" ? "Happy Parent" : "Function"}
                className="w-full h-40 object-cover block"
                onClick={() => openLightbox(idx)}
                loading="lazy"
              />

              <div
                className="zoom-icon absolute right-2 top-2 text-xl bg-white/80 rounded-full p-1"
                onClick={() => openLightbox(idx)}
                aria-hidden
              >
                🔍
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          id="lightbox"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-2 text-white text-3xl leading-none"
              onClick={closeLightbox}
              aria-label="Close"
            >
              &times;
            </button>

            <img
              id="lightbox-img"
              src={images[currentIndex]}
              alt="Zoomed"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />

            {/* Prev / Next */}
            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl p-2 bg-white/10 rounded-full"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl p-2 bg-white/10 rounded-full"
              aria-label="Next"
            >
              ›
            </button>

            {/* Caption / index */}
            <div className="mt-2 text-center text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
