import React from "react";
import aboutPpic from "../../assets/camera/about-pic.jpg";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <div
      id="about"
      className="dark:bg-dark bg-slate-100 sm:min-h-[750px] sm:grid sm:place-items-center duration-300"
    >
      <div className="container direction-rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={aboutPpic}
              alt=""
              className="w-full sm:w-auto max-h-[300px] md:max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] object-cover"
            />
          </div>
          <div>
            <div className="space-y-5 sm:px-8 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold pt-6"
              >
                קצת עלינו
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                אנחנו מאמינים בכוח של תמונה לתפוס רגעים ייחודיים ולהפוך אותם
                לזיכרונות שיישארו איתכם לנצח
              </p>
              <p data-aos="fade-up">
                אנחנו שואפים להציג את היופי שבפשטות ולהביא את הסיפורים
                הוויזואליים שלכם לידי ביטוי בצורה הכי טבעית ואותנטית.
              </p>
              <p data-aos="fade-up">
                אנחנו מתמחים בצילומי ספורט, טבע, אירועים מיוחדים ועוד. אנחנו
                מביאים עימנו שנים של ניסיון והבנה עמוקה של איך להוציא את המיטב
                מכל סצנה וסיטואציה
              </p>
              <button data-aos="fade-up" className="button-outline">
                <Link smooth to={"/#contact"}>
                  בואו נתחיל
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
