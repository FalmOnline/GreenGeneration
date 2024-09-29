"use client";

import React, { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Map from '../components/Map';

const ContactForm = () => {
  const { executeRecaptcha } = useReCaptcha();
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const validationSchema = Yup.object({
    firstName: Yup.string().required('🌿 Eroule, nu uita să completezi acest câmp! 🌿'),
    email: Yup.string().email('Adresă de email invalidă').required('🌿 Eroule, nu uita să completezi acest câmp! 🌿'),
    message: Yup.string().required('🌿 Eroule, nu uita să completezi acest câmp! 🌿'),
    consent: Yup.boolean().oneOf([true], '🌱 Pentru a ne putea uni forțele în lupta pentru un viitor mai verde, trebuie să fii de acord cu prelucrarea datelor tale. Împreună suntem mai puternici! 💪'),
    privacy: Yup.boolean().oneOf([true], '🌱 Pentru a ne putea uni forțele în lupta pentru un viitor mai verde, trebuie să fii de acord cu prelucrarea datelor tale. Împreună suntem mai puternici! 💪'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      message: '',
      consent: false,
      privacy: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setStatus({ loading: true, message: '', type: '' });

      if (!executeRecaptcha) {
        setStatus({ loading: false, message: 'Recaptcha nu este disponibil încă', type: 'error' });
        return;
      }

      const token = await executeRecaptcha('contact_form');
      const data = { ...values, token };

      try {
        const response = await fetch('/api/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setStatus({ loading: false, message: 'Formularul a fost trimis cu succes!', type: 'success' });
          formik.resetForm(); // Reset form fields
        } else {
          const result = await response.json();
          setStatus({ loading: false, message: result.message || 'Trimiterea formularului a eșuat', type: 'error' });
        }
      } catch (error) {
        setStatus({ loading: false, message: 'A apărut o eroare neașteptată', type: 'error' });
      }
    },
  });

  return (
    <section className="bg-white lg:w-screen lg:h-screen flex lg:flex-col items-center relative">
      <div className='hidden lg:block w-screen h-full lg:absolute z-0'>
        <div className="w-1/2 h-full bg-[url('/bg-contact-page.jpg')] bg-no-repeat bg-cover bg-center"></div>
        <div className='w-1/2'></div>
      </div>
      <div className='lg:container 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-col lg:flex-row z-20'>
        <div className="bg-[url('/bg-contact-page.jpg')] lg:bg-none lg:w-1/2 p-8 h-[380px] flex flex-col justify-center">
         <h1>Contact</h1>
         <p className='mt-8'>🌿 Suntem aici pentru a salva planeta, împreună cu tine! 🌿 <br />
         Ne poți contacta pentru orice întrebare, colaborare sau sugestie.</p>
        </div>
        <div className='lg:w-1/2 p-8 lg:p-10 bg-white'>
          <h3 className='pb-4 mt-3 leading-none'>Scrie-ne un mesaj:</h3>
          <form className="contact-form flex flex-col gap-3" onSubmit={formik.handleSubmit} noValidate>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Prenume"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <textarea
              name="message"
              id="message"
              placeholder="Mesaj"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
            <div className="checkbox-group mt-3">
              <label>
                <input
                  type="checkbox"
                  name="consent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.consent}
                />
                Sunt de acord să transmit datele mele personale prin intermediul acestui formular, ca să fiu contactat/ă prin telefon sau e-mail în legătură cu solicitarea mea.
              </label>
              {formik.touched.consent && formik.errors.consent ? (
                <div className="error">{formik.errors.consent}</div>
              ) : null}
            </div>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="privacy"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.privacy}
                />
                <span>Am citit și sunt de acord ca datele mele să fie prelucrate conform <Link className='ml-1 inline' href="/politica-de-confidentialitate">Politicii de confidențialitate</Link></span>.
              </label>
              {formik.touched.privacy && formik.errors.privacy ? (
                <div className="error">{formik.errors.privacy}</div>
              ) : null}
            </div>
            <button className="mt-4 mb-12" type="submit" disabled={status.loading}>
              {status.loading ? 'Trimitere...' : 'Trimite mesajul'}
            </button>
          </form>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <style jsx>{`
            .error {
              color: red;
              font-size: 0.72em;
              margin-top: 0.5em;
            }
            .status-message {
              margin-top: 1rem;
              padding: 0.5rem;
              border-radius: 5px;
            }
            .status-message.success {
              color: #7DAC004;
              background-color: #d4edda;
              border-color: #c3e6cb;
            }
            .status-message.error {
              color: #FF4747;
              background-color: #f8d7da;
              border-color: #f5c6cb;
            }
          `}</style>

            <Map />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
