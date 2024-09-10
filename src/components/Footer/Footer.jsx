import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaArrowUp,
} from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const FooterLinks = [
  { title: "בית", link: "/" },
  { title: "עלינו", link: "/#about" },
  { title: "צור קשר", link: "/#contact" },
  { title: "גלריה", link: "/gallery" },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false); // מצב טעינת המפה
  const location = useLocation();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMapVisibility = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsMapVisible(true); // טען את המפה רק כאשר היא נכנסת לפריים
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (location.hash === "") {
      scrollToTop();
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleMapVisibility, {
      threshold: 0.1, // טען את המפה כאשר לפחות 10% ממנה בפריים
    });

    const mapElement = document.getElementById("map");
    if (mapElement) observer.observe(mapElement);

    return () => {
      if (mapElement) observer.unobserve(mapElement);
    };
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl relative">
      <section className="container direction-rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-8">
          {/* פרטי החברה */}
          <div className="py-8 px-4">
            <h2 className="sm:text-2xl text-xl font-bold text-justify mb-3 flex items-center gap-3">
              צילום בבאר שבע
            </h2>
            <p className="text-sm">
              עם ניסיון עשיר ועין חדה לפרטים, אנחנו ב-Camera Pro מתמקדים בלכידת
              הרגעים הייחודיים שמספרים את הסיפור שלכם בתמונות בלתי נשכחות.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>באר שבע</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>052-5775880</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* קישורים */}
          <div className="py-8 px-4">
            <h3 className="sm:text-xl text-xl font-bold text-justify mb-3">
              קישורים
            </h3>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                >
                  <Link
                    smooth
                    to={link.link}
                    className="flex items-center space-x-2"
                  >
                    <span className="ml-1">
                      <MdOutlineArrowBackIos />
                    </span>{" "}
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* מפת גוגל */}
          <div className="py-8 px-4">
            {!isMapVisible ? (
              <div
                className="w-[300px] h-[200px] bg-gray-300 dark:bg-gray-600 animate-pulse"
                id="map-placeholder"
              >
                {/* מציג שלד בזמן שהמפה נטענת */}
              </div>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.9448422075134!2d-118.25300528497246!3d34.05223538060824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b4a7f91f5b%3A0x501f0b0f78e8e299!2sBeersheba!5e0!3m2!1sen!2sil!4v1641583469693!5m2!1sen!2sil"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
                id="map"
              ></iframe>
            )}
          </div>
        </div>
        {/* שורה נוספת עם כל הזכויות שמורות */}
        <div className="py-4 text-center border-t border-gray-300 dark:border-gray-600">
          <p className="text-sm text-gray-500 dark:text-gray-200">
            &copy; 2024 כל הזכויות שמורות ל-
            <a
              href="https://www.web4u.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              web4u
            </a>
          </p>
        </div>
        {/* כפתור חזרה לראש העמוד */}
        <div className="fixed bottom-4 left-4">
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition duration-300"
            >
              <FaArrowUp />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Footer;
