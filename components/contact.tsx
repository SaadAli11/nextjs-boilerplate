"use client"

import React, {useRef, useState} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";

import SubmitBtn from "./submit-btn";
import emailjs from '@emailjs/browser';

import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
    const form = useRef<HTMLFormElement | null>(null);


    const [loading, setLoading] = useState(false)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true)

        if (!form.current) {
            toast.error('Form reference is not available');
            setLoading(false);
            return;
        }

        emailjs.sendForm('service_fg7rj6v', 'template_7kixw3s', form.current!, {
                publicKey: 'Hcm2vTAiXLgSgxhw7',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Email sent successfully!");
                    form.current?.reset()
                    setLoading(false)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(error.text);
                    setLoading(false)
                },
            );
    };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
         saadalisher77@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={form}
        onSubmit={sendEmail}

        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);
        //
        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }
        //
        //   toast.success("Email sent successfully!");
        // }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="text"
          name="user_name"
          required
          maxLength={500}
          placeholder="Name"
        />
          <input
          className="h-14 px-4 mt-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="user_email"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
        />
        <input
            className="h-14 mt-3 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="text"
            name="from_name"
            required
            maxLength={500}
            placeholder="Subject"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
        />
        <SubmitBtn loading={loading}/>
      </form>
    </motion.section>
  );
}
