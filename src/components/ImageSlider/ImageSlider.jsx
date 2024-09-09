import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sliderImages } from "../../data/sliderImages";

const ImageSlider = () => {
  return (
    <div id="images" className="pt-14 direction-rtl">
      <div className="container">
        {/* Heading */}
        <h3
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold mb-3"
        >
          לוכדים רגעים, יוצרים זיכרונות
        </h3>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          בכל קליק, אנחנו מציתים את הקסם שמאחורי כל תמונה
        </p>
        {/* Car listing */}
        <h1 className="text-3xl sm:text-xl font-semibold text-center">
          צלמים מקצועיים
        </h1>
        <div className="max-w-[124rem] px-4 mx-auto h-[70%]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="relative h-[52rem] py-8"
          >
            {sliderImages.map((image) => (
              <SwiperSlide
                key={image.id}
                className="w-[25rem] h-[31rem] relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[25rem] h-[31rem] rounded-[2rem] object-cover"
                />
              </SwiperSlide>
            ))}
            <div className="relative flex items-center justify-center bottom-[12rem]">
              <div className="swiper-button-prev w-[3.5rem] h-[3.5rem] bg-white rounded-full filter drop-shadow-[0px_8px_24px_rgba(18,28,53,0.1)] flex items-center justify-center">
                <ion-icon
                  name="arrow-back-outline"
                  className="text-[2rem] text-[#222224]"
                ></ion-icon>
              </div>
              <div className="swiper-button-next w-[3.5rem] h-[3.5rem] bg-white rounded-full filter drop-shadow-[0px_8px_24px_rgba(18,28,53,0.1)] flex items-center justify-center">
                <ion-icon
                  name="arrow-forward-outline"
                  className="text-[2rem] text-[#222224]"
                ></ion-icon>
              </div>
              <div className="swiper-pagination w-[15rem] dark:swiper-pagination-dark"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
