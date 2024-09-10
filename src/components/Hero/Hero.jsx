import React, { useEffect, useState } from "react";
import camLight from "../../assets/camera/camera.png";
import camDark from "../../assets/camera/cameraDark.jpg";
import AOS from "aos";
import { HashLink as Link } from "react-router-hash-link";

const Hero = ({ theme }) => {
  const [currentImage, setCurrentImage] = useState(camLight);

  useEffect(() => {
    // Preload both images
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(camLight);
    preloadImage(camDark);

    // Change the image based on theme
    const newImage = theme === "dark" ? camDark : camLight;
    setCurrentImage(newImage);

    AOS.refresh();
  }, [theme]);

  return (
    <div className="dark:bg-black dark:text-white duration-300 direction-rtl">
      <div className="container min-h-[700px] flex">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={currentImage}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1">
            <p data-aos="fade-up" className="text-primary text-2xl mb-[-18px]">
              פוקוס, פרספקטיבה, מקצוענות.
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold"
            >
              לכידת רגעים
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              כאן כל תמונה הופכת לסיפור, וכל רגע הופך לנצחי. אנחנו מתמחים בלכידת
              הרגעים החשובים ביותר בחייכם, עם מבט אומנותי ופרספקטיבה ייחודית{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              <Link smooth to={"/#contact"}>
                יצירת קשר
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
