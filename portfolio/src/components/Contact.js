import React from "react";
import '../App.css';

function AboutMe() {
    return (
        <>
            <div className="contact-box" id="contact">
                <h1 className="contact-name">Contact Me</h1>
                
                    <p className="contact-note">Feel free to reach out to me! Either use the form below or connect with me on my <a href="https://www.linkedin.com/in/samuel-s-han/" target="_blank" rel="noreferrer">Linkedin</a></p>
               
                <div className="contact-form">
                    <form action="https://getform.io/f/fbbaa5a6-321b-4b63-a3c2-ec6ba05d4b5b" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <input id="message-box" type="text" name="message" placeholder="Your Message" required/>
                        <br />
                        <button id= "submit-button" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AboutMe