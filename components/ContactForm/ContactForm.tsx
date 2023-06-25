'use client';
import React, { useRef, useState } from 'react';
import ContactFormTextInput from './ContactFormTextInput';
import ContactFormDropdown from './ContactFormDropdown';
import ContactFormTextArea from './ContactFormTexArea';
import ContactFormControls from './ContactFormControls';
import { validateFormData } from '@/utils/ContactForm';
import { FormDataI } from '@/models/interfaces';

const ContactForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  console.log('ContactForm ~ formSubmitted:', formSubmitted);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const reasonForContactRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const clearInputFields = () => {
    nameRef.current!.value = '';
    emailRef.current!.value = '';
    phoneRef.current!.value = '';
    reasonForContactRef.current!.value = 'Appointment Request';
    messageRef.current!.value = '';
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormIsValid(false);
    clearInputFields();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormDataI = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      phone: phoneRef.current!.value,
      reasonForContact: reasonForContactRef.current!.value,
      message: messageRef.current!.value,
    };

    setFormSubmitted(true);

    const isValid = validateFormData(formData);

    if (isValid) {
      setFormIsValid(true);
      clearInputFields();
    }
  };

  return (
    <div>
      <form
        className="p-5 rounded-lg bg-slate-300"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <ContactFormTextInput
            label="Name"
            placeholder="Full Name"
            type="text"
            inputRef={nameRef}
          />

          <ContactFormTextInput
            label="Email"
            placeholder="Email"
            type="email"
            inputRef={emailRef}
          />

          <ContactFormTextInput
            label="Phone"
            placeholder="Phone"
            type="tel"
            inputRef={phoneRef}
          />
        </div>

        <ContactFormDropdown inputRef={reasonForContactRef} />
        <ContactFormTextArea inputRef={messageRef} />

        <div className="grid grid-cols-2 mt-5 md:grid-cols-3">
          <div className="hidden md:block"></div>
          <div className="my-auto md:text-center">
            {!formIsValid && formSubmitted && (
              <p className="my-auto font-bold text-center text-red-500 text-md md:text-lg">
                Please fill out all fields
              </p>
            )}
            {formIsValid && formSubmitted && (
              <p className="my-auto text-sm font-bold text-center text-green-700 md:text-lg">
                Message sent!
                <br /> Expect a response within 24 hours
                <br /> For demo purposes, form data is logged to console
              </p>
            )}
          </div>
          <ContactFormControls reset={handleReset} />
        </div>
      </form>

      <p className="mt-3 text-center text-red-500">*All Fields Are Required</p>
    </div>
  );
};

export default ContactForm;
