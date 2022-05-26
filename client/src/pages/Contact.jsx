<<<<<<< HEAD
import React, { useRef } from "react";
import { LogOut } from "../components/nav.stlyes";
import { Text, Input, Thanks } from "../components/contact.styles";
import Nav from '../pages/Nav';
import emailjs from "emailjs-com";

=======
import React from 'react';
>>>>>>> c2211577c9c2bb6f4e96db2cc6a1711e46b8a476


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

// lets user know message was sent
  const feedbackEl = document.querySelector(".feedback");
    feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 4000);

    emailjs
      .sendForm(
        "service_phbjoyn",
        "template_klqoxnq",
        form.current,
        "KfGVyjhX_IvddnHea"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
<<<<<<< HEAD
    <Nav />

      <div className='w-full h-screen flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold border-b-4 border-pink-600 text-white text-center p-4'>Contact Us Here</p>
        </div>
          <Input className="placeholder-white p-4 rounded-[10px] bg-[#290185] text-white opacity-[85%]"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <Input className='placeholder-white my-5 p-4 rounded-[10px] bg-[#53505B] text-white opacity-[85%]'type="text" name="email" placeholder="Email" required />
          <Text className='placeholder-white p-4 rounded-[10px] mb-5 bg-[#116DC4] text-white opacity-[85%]'
            name="message"
            rows="5"
            placeholder="Message"
            required
          ></Text>
          <LogOut type="submit" className="">
            Send Message
          </LogOut>
          {/* <Thanks className="feedback hide text-white text-4xl text-center font-bold">Thank You!!</Thanks> */}
        </form>
      </div>
=======
      Contact HERE!! WOO!
>>>>>>> c2211577c9c2bb6f4e96db2cc6a1711e46b8a476
    </>
  );
}

export default Contact;
