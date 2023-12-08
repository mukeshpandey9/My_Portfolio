import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import LayoutComponent from "../components/LayoutComponent";
import AnimatedText from "../components/AnimatedText";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5262uye",
        "template_teaecgh",
        form.current,
        "_tM_lvQB3YitWmy-3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <LayoutComponent className="px-5 md:px-32 py-10 md:py-16" id="contact">
        <div className="flex flex-col md:flex-row gap-10 items-center p  h-full relative">
          <div className="absolute top-1 -right-3 z-[-1]  w-[101%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <AnimatedText text="Get In Touch Contact Me" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="form">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-5 pt-10 p-6 border-2 border-dark rounded-xl"
              >
                <input
                  type="text"
                  name="user_name"
                  className="p-2 text-sm md:text-lg rounded-md md:p-3"
                  placeholder="Your Name.."
                />
                <input
                  type="text"
                  name="user_email"
                  className="p-2 text-sm md:text-lg rounded-md md:p-3"
                  placeholder="Your Email.."
                />
                <textarea
                  className="p-2 text-sm md:text-lg rounded-md md:p-3"
                  name="message"
                  placeholder="Message.."
                  cols="50"
                  rows="5"
                ></textarea>
                <button
                  type="submit"
                  className="text-light bg-dark dark:bg-light dark:text-dark border-2 border-transparent dark:border-light p-3 px-5 rounded-lg"
                >
                  Send
                </button>
                <span className="mt-4 text-center">
                  {done && "Thanks for Contacting Me"}{" "}
                </span>
              </form>
            </div>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
};

export default Contact;
