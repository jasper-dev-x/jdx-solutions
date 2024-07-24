"use client";

import {FormEvent, useEffect, useState} from "react";
import {FormInput} from "../components/FormInput";
import {EmailValidator} from "@/state/dev_utils";
import {Radio, RadioGroup} from "@headlessui/react";
import {IoCheckmarkCircle} from "react-icons/io5";

const subjects = [
  {
    name: "Collaborate",
    shortDesc: "I have an idea we can work on, let's connect!",
  },
  {
    name: "Custom Solution",
    shortDesc: "I need a website, web app and/or mobile app.",
  },
  {
    name: "Other Assistance Needed",
    shortDesc: "Please explain your needs in the 'Message' section.",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Collaborate",
    message: "",
  });
  const [formValidState, setFormValidState] = useState({
    email: false,
    name: false,
  });

  // ON COMPOSE EMAIL
  const onComposeEmail = (x: FormEvent) => {
    x.preventDefault();
    if (formValidState.email == true && formValidState.name == true)
      window.open(
        `mailto:${formState.email}?subject=${formState.subject}&body=${formState.message}`
      );
    else
      alert(
        "Opps! Seems like something is missing.\nCheck the form and try again."
      );
  };

  useEffect(() => {
    const valState = {
      email: EmailValidator(formState.email),
      name: formState.name.length >= 3,
    };
    setFormValidState(valState);

    if (formValidState.email == true && formValidState.name == true)
      setFormState;
  }, [formState]);

  return (
    <main className='flex flex-col'>
      <h1 className='text-3xl font-bold text-center mb-5'>Get in Touch</h1>
      <h3 className='text-xl text-center'>What can we do for you?</h3>
      <p className='mb-5 text-center'>
        Provide your details and we&apos;ll reach out promptly. We&apos;re eager
        to connect with you!
      </p>

      <form
        onSubmit={(x) => onComposeEmail(x)}
        className='flex flex-col gap-5'>
        {/* SUBJECT */}
        <div className='w-full px-4'>
          <div className='mx-auto w-full max-w-md my-5'>
            <RadioGroup
              value={formState.subject}
              onChange={(x) => setFormState({...formState, subject: x})}
              aria-label='Email Subject'
              className='space-y-2'>
              {subjects.map((subject) => (
                <Radio
                  key={subject.name}
                  value={subject.name}
                  className='group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10'>
                  <div className='flex w-full items-center justify-between'>
                    <div className='text-sm/6'>
                      <p className='font-semibold text-white'>{subject.name}</p>
                      <div className='px-2  text-white/50'>
                        {subject.shortDesc}
                      </div>
                    </div>
                    <IoCheckmarkCircle className='size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100' />
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* FULL NAME ROW */}
        <FormInput
          label='Name'
          subLabel='(required)'
          value={formState.name}
          setValue={(x: string) => setFormState({...formState, name: x})}
          isValid={formValidState.name ? 1 : -1}
        />

        {/* EMAIL */}
        <FormInput
          label='Email'
          subLabel='(required)'
          value={formState.email}
          setValue={(x: string) => setFormState({...formState, email: x})}
          isValid={formValidState.email ? 1 : -1}
        />

        {/* MESSAGE */}
        <FormInput
          label='Message'
          placeholder='Any notes for us?'
          type='textarea'
          value={formState.message}
          setValue={(x: string) => setFormState({...formState, message: x})}
        />

        {/* SUBMIT */}
        <button
          type='submit'
          className='flex self-start rounded-md bg-gray-100/20 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
          Compose Email
        </button>
      </form>
    </main>
  );
}
