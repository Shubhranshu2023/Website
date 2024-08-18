import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import React from 'react'
import contactCSS from './../Contact/Contact.module.css'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n1ntfca', 'template_lwynlrm', form.current, {
        publicKey: 'lBTge6W9BdvDywkgi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className={contactCSS.contact_wrapper} id="contact">
        <form className={contactCSS.form} ref={form} onSubmit={sendEmail}>
          <h1>Let's Work Together</h1>
          <p>Feel free to reach out—I'd love to connect!</p>

          <div>
            <input type="text" placeholder='First Name' name='user_name'required/>
            <input type="text" placeholder='Last Name ' required/>
          </div>
          <div>
            <input type="email" placeholder='Email' required name='user_email'/>
           
          </div>
          <textarea cols="30" rows="10" placeholder='Message' name="message"></textarea>
          <button value="Send">Send</button>
        </form>

        <div className={contactCSS.details}>
          <div>
            <i className='fa-solid fa-phone'></i>
            <h3>Phone <small>+91 8093602765</small></h3>
          </div>
          <div>
            <i className='fa-solid fa-location-dot'></i>
            <h3>Address <small>Bhubaneswar, Odisha</small></h3>
          </div>
          <div>
            <i className='fa-solid fa-envelope'></i>
            <h3>Email <small>shubhranshupanda2020@gmail.com</small></h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact