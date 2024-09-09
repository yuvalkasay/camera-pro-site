import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import video from "../../assets/camera/vid-1.mp4";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // מצב טעינה
  const [successMessage, setSuccessMessage] = useState(""); // הודעת הצלחה

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // התחלת מצב טעינה

    emailjs
      .sendForm("service_d4ujcph", "template_p9w3ynu", form.current, {
        publicKey: "pv_L3yy-dbxqxoN7r",
      })
      .then(
        () => {
          setSuccessMessage("הפרטים שלך נשלחו בהצלחה! 🚀");
          setLoading(false); // סיום טעינה
          e.target.reset(); // ריקון הטופס
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false); // סיום טעינה גם במקרה של כשלון
        }
      );
  };

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white ">
        <div className="container direction-rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
            <div data-aos="slide-right" data-aos-duration="1500">
              <video
                src={video}
                className="w-full sm:w-auto max-h-[300px] md:max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] object-cover"
                autoPlay
                loop
                muted
              ></video>
            </div>

            <div>
              <div className="space-y-5 sm:p-16 pb-6">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold pt-6"
                >
                  בואו נדבר
                </h1>
                <p className="leading-8 tracking-wide">
                  אנחנו מאמינים בכוח של תמונה לתפוס רגעים ייחודיים ולהפוך אותם
                  לזיכרונות שיישארו איתכם לנצח. צרו איתנו קשר היום כדי להבטיח
                  שהרגעים המיוחדים שלכם יישארו איתכם לנצח...
                </p>

                {/* הודעת הצלחה */}
                {successMessage && (
                  <div className="p-4 mb-4 text-sm text-dark bg-primary rounded-lg">
                    {successMessage}
                  </div>
                )}

                {/* form */}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="dark:text-black"
                >
                  <div>
                    <input
                      type="text"
                      className="w-full min-h-[46px] rounded-[20px] px-[1rem] mb-[1.6rem] font-light border border-dark "
                      placeholder="שם"
                      id="name"
                      name="user_name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="w-full min-h-[46px] rounded-[20px] px-[1rem] mb-[1.6rem] font-light border border-black"
                      placeholder="מס' טלפון"
                      id="email"
                      name="user_number"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      rows="2"
                      className="w-full min-h-[96px] rounded-[20px] py-[0.5rem] px-[1rem] mb-[1.6rem] font-light border border-dark"
                      placeholder="הודעה"
                      id="message"
                      name="message"
                      required
                    ></textarea>
                  </div>

                  {/* כפתור שליחה עם אינדיקציית טעינה */}
                  <button
                    type="submit"
                    data-aos="fade-up"
                    className={`button-outline ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "שולח..." : "שלח"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
