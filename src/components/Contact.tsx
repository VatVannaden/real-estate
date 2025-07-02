import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    'service_upyn189',          // service ID
                    'template_i9oyuf3',         // replace with your EmailJS template ID
                    form.current,
                    'vYEOVJ3RqP71JVAtR'           // replace with your EmailJS public key
                )
                .then(
                    (result: any) => {
                        console.log(result.text);
                        toast.success("Message sent successfully!");
                        form.current?.reset();
                    },
                    (error: any) => {
                        console.log(error.text);
                        toast.success("Failed to send message.");
                    }
                );
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
            id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                Get in Touch{" "}
                <span className='underline underline-offset-4 decoration-1 font-light'>
                    With Us
                </span>
            </h1>
            <p className='text-center text-gray-500 max-w-80 mb-12 mx-auto'>
                Ready to Make a Move? Let's Build Your Future Together
            </p>

            <form ref={form} onSubmit={sendEmail} className='max-w-2xl mx-auto text-gray-600 pt-6'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input
                            className='w-full border border-gray-300 rounded py-2 px-4 mt-2'
                            type='text'
                            name='Name'
                            placeholder='Enter Your Name'
                            required
                        />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4 mt-4 md:mt-0'>
                        Your Email
                        <input
                            className='w-full border border-gray-300 rounded py-2 px-4 mt-2'
                            type='email'
                            name='Email'
                            placeholder='Enter Your Email'
                            required
                        />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea
                        className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        name='Message'
                        placeholder='Enter Message'
                        required
                    ></textarea>
                </div>
                <button type='submit' className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
                    Send Message
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;
