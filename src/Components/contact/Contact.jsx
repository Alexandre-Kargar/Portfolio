import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hy8bqlg', 'template_h4dvqyl', form.current, 'Px2NGVOW-7wmVEAQn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };
  return (
    <section id='contact'>
      <h2>Me contacter</h2>

        <div className='container contact__container'>
          <div className="contact__options">
             <artice className="contact__option">
              <HiOutlineMail className='contact__option-icon' />
              <h4>Courriel</h4>
              <h5>hosseinkargar1989@gmai.com</h5>
              <a href="mailto:hosseinkargar1989@gmail.com" target='_blank'>Envoyer un courriel</a>
             </artice>

             <artice className="contact__option">
              <FiPhoneCall className='contact__option-icon'/>
              <h4>Appeler</h4>
              <h5>+1 514-652-6757</h5>
              <a href="callto:+15146526757">Appeler</a>
             </artice>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Votre prénom et nom' required />
            <input type="email" name='email' placeholder='Votre adresse courriel' required />
            <input type="phone" name='phoneNumber' placeholder='Votre numéro de téléphone' />
            <textarea name="message" id="" required>Votre message</textarea>
            <button type='submit' className='btn btn-primary'>Envoyer</button>
          </form>
        </div>
    </section>
  )
}

export default Contact