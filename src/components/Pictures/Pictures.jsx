import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { imageData } from "../../data/imageData.js";

const Pictures = () => {
  const [modal, setModal] = useState({ isOpen: false, src: "", alt: "" });
  const [shuffledImages, setShuffledImages] = useState([]);

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

    setShuffledImages(shuffleArray([...imageData])); // Shuffle a copy of the imageData array
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
