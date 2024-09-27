import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { imageData } from "../../data/imageData.js";

const SkeletonLoader = () => (
  <div className="w-full h-64 bg-gray-200 animate-pulse mb-4 rounded-lg"></div>
);

const Pictures = () => {
  const [modal, setModal] = useState({ isOpen: false, src: "", alt: "" });
  const [shuffledImages, setShuffledImages] = useState([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const openModal = (src, alt) => {
    setModal({ isOpen: true, src, alt });
  };

  const closeModal = () => {
    setModal({ isOpen: false, src: "", alt: "" });
  };

  useEffect(() => {
    // Shuffle the images when the component mounts
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Handle the error by resolving anyway
      });
    };

    const preloadImages = async () => {
      const shuffled = shuffleArray([...imageData]); // Shuffle a copy of the imageData array
      const imagePromises = shuffled.map((img) => loadImage(img.src));
      await Promise.all(imagePromises); // Wait for all images to load
      setShuffledImages(shuffled);
      setAllImagesLoaded(true);
    };

    preloadImages(); // Preload all images
  }, []);

  return (
    <div className="p-5 direction-rtl">
      <Helmet>
        <title>גלריית תמונות | קאמרה פרו</title>
        <meta
          name="description"
          content="גלו את גלריית התמונות שלנו בבאר שבע, עם צילומים מקצועיים לכל צורך: תדמית, אפליקציות היכרויות, הצעות נישואין, שטח וספורט. קאמרה פרו מציעים איכות ללא פשרות"
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-8">
        גלריית התמונות שלנו 📸
      </h1>
      <p className="text-primary font-semibold text-2xl mb-[18px] text-center">
        כמה רגעים קסומים שתפסנו בעדשת המצלמה...
      </p>

      {/* Skeleton Loader Gallery */}
      {!allImagesLoaded && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      )}

      {/* Image Gallery */}
      {allImagesLoaded && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {shuffledImages.map((img, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:brightness-75"
                onClick={() => openModal(img.src, img.alt)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-5"
          onClick={closeModal}
        >
          <span className="absolute top-5 right-9 text-white text-4xl font-bold cursor-pointer">
            &times;
          </span>
          <img
            src={modal.src}
            alt={modal.alt}
            className="max-w-full max-h-full h-auto mx-auto animate-zoom"
          />
        </div>
      )}
    </div>
  );
};

export default Pictures;
