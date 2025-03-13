import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contract = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_oih5r1l',
        'template_zoc3oke',
        form.current,
        'veE99dE55z_msKPWq'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            placeholder="Your name"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="your@email.com"
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            {...register('message', { 
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              }
            })}
            placeholder="Your message"
            rows="5"
          />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contract;