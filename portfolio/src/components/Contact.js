import React from "react";
import '../App.css';

function AboutMe() {
    return (
        <>
            <div className="contact-box" id="contact">
                <h1 className="contact-name">Reach Out To Me</h1>
                <div className="contact-note">
                    <p>This is me </p>
                </div>
                <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        action="https://getform.io/f/9e49dea7-d06b-4afa-8ad1-77a3cc2e4a19"
        method="POST"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF914D] text-gray-300">
            Contact
          </p>
        </div>
        <label className="text-gray-300 my-1 text-xl" htmlFor="name">
          Name:
        </label>
        <input className="bg-[#ccd6f6] p-2" type="text" name="name" />
        <label className="text-gray-300 my-1 text-xl" htmlFor="email">
          Email:
        </label>
        <input className="p-2 bg-[#ccd6f6]" type="email" name="email" />
        <label className="text-gray-300 my-1 text-xl" htmlFor="message">
          Message:
        </label>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="5"
        ></textarea>
        <button className="text-white px-4 py-3 my-8 mx-auto flex items-center border-2 hover:bg-[#FF914D] hover:border-[#FF914D]">
          Send Me a Message
        </button>
      </form>
    </div>
  );
};
            </div>
        </>
    )
}

export default AboutMe