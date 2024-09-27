import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "תשומת לב פרטים",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description:
      "אנחנו מקפידים על כל פרט קטן, מהפוקוס המדויק ועד התאורה המושלמת, כדי להבטיח שהתמונות שלנו ישקפו את היופי שבכל רגע",
    content:
      "כל לחיצה על המצלמה שלנו היא תוצאה של מחשבה מעמיקה ואומנות, שמבוססת על ניסיון רב שנים. חשוב לנו שכל תמונה תספר את הסיפור שלה, ולכן אנחנו שואפים להוציא את המיטב מכל רגע. בין אם מדובר בפריים ספורטיבי מלא אנרגיה או בסצנה שקטה של טבע, אנחנו תמיד מתמקדים בהעברת היופי שבאותו רגע בדיוק ובאותנטיות מוחלטת",
    aosDelay: "0",
  },
  {
    name: "נסיון ומקצועיות",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description:
      "הניסיון שלנו חוצה תחומים – מספורט, דרך טבע ובעלי חיים ועד צילום אירועים ורחפנים ואפליקציות",
    content:
      "אנחנו מביאים את המומחיות שלנו לכל סגנון, ומתאימים את עצמנו לצרכים הייחודיים של כל פרויקט. מצילום לאפליקציות היכוריות, אירועי ספורט או צילומי תדמית - חשוב לנו שכל תמונה תתאים בדיוק לכל אירוע ולצרכים של כל לקוח",
    aosDelay: "500",
  },
  {
    name: "גישה אישית וייחודית",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    description:
      "אנחנו מאמינים שכל לקוח הוא ייחודי, ולכן כל פרויקט נתפר בדיוק לפי הצרכים שלכם.",
    content:
      "אנחנו מאמינים שכל לקוח הוא ייחודי, ולכן כל פרויקט נתפר בדיוק לפי הצרכים שלכם. מבחינתנו, אין שני פרויקטים זהים – כל אחד מגיע עם הסיפור המיוחד שלו, האופי שלו, והדרישות הייחודיות. לכן, אנחנו מקפידים להקשיב לכם, להבין לעומק את הצרכים שלכם, ולבנות יחד פתרון מותאם אישית, שמתאים במדויק לחזון ולדרישות שלכם.",
    aosDelay: "1000",
  },
];

const Services = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    content: null,
    title: "",
  });

  const openModal = (content, title) => {
    setModal({ isOpen: true, content, title });
  };

  const closeModal = () => {
    setModal({ isOpen: false, content: null, title: "" });
  };

  return (
    <>
      <span id="about"></span>
      <div className="direction-rtl dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h3
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl"
            >
              למה לבחור בנו?
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <button
                  onClick={() => openModal(skill.content, skill.name)}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  למידע נוסף
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 dark:text-black direction-rtl transition-opacity duration-300 ease-in-out"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-2xl w-full transform transition-all duration-300 ease-in-out scale-95 sm:scale-100 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-center border-b-2 pb-2">
              {modal.title}
            </h2>
            <p className="mb-6 text-gray-700 text-[110%]">{modal.content}</p>
            <div className="text-left">
              <button
                onClick={closeModal}
                className="text-white bg-primary hover:bg-primary-dark px-6 py-3 rounded-full transition-colors duration-300 ease-in-out shadow-md"
              >
                סגור
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
