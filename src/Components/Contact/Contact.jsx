import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';
import contactCSS from './../Contact/Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const contactRef = useRef(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const errors = {};
    const formElements = form.current.elements;

    if (!formElements.user_name.value) errors.user_name = 'First name is required';
    if (!formElements.user_email.value) {
      errors.user_email = 'Email is required';
    } else if (!emailRegex.test(formElements.user_email.value)) {
      errors.user_email = 'Email address is invalid';
    }
    if (!formElements.message.value) errors.message = 'Message cannot be empty';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm('service_n1ntfca', 'template_lwynlrm', form.current, {
        publicKey: 'lBTge6W9BdvDywkgi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Clear form and errors on success if needed
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={contactRef}
        className={`${contactCSS.contact_wrapper} ${isVisible ? contactCSS.animate : ''}`}
        id="contact"
      >
        <form className={contactCSS.form} ref={form} onSubmit={sendEmail}>
          <h1>Let's Work Together</h1>
          <p>Feel free to reach out—I'd love to connect!</p>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="user_name"
              required
            />
            {errors.user_name && <p className={contactCSS.error}>{errors.user_name}</p>}
            <input
              type="text"
              placeholder="Last Name"
              name="user_last_name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            {errors.user_email && <p className={contactCSS.error}>{errors.user_email}</p>}
          </div>
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            name="message"
          ></textarea>
          {errors.message && <p className={contactCSS.error}>{errors.message}</p>}
          <button type="submit">Send</button>
        </form>

        <div className={contactCSS.details}>
          <div>
            <i className="fa-solid fa-phone"></i>
            <h3>
              Phone <small>+91 8093602765</small>
            </h3>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <h3>
              Address <small>Bhubaneswar, Odisha</small>
            </h3>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <h3>
              Email <small>shubhranshupanda2020@gmail.com</small>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
