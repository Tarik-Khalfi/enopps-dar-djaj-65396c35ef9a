'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import { validationSchema } from "/utils/validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

const FormCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleSubmit = async (
        values,
        {
            setSubmitting,
            resetForm,
        }
    ) => {
        try {
            setIsLoading(true);
            // Send email using Nodemailer
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            // Reset the form
            resetForm();

            // Show success message or redirect to a thank you page
            console.log("Email sent successfully!");
            console.log(values)
        } catch (error) {
            // Handle error
            console.error("Failed to send email:", error);
        } finally {
            setSubmitting(false);
            toast.success("Form submitted successfully!");
            setShowConfetti(true);
            setIsLoading(false);
        }
    };

    return (
        <div className='py-8 font-poppins px-6'>
            <Image src='/Group 284.png' width={120} height={200}
                className=' absolute  right-0 bottom-0 rotate-[269deg] ' alt='img' />
            <Image src='/Group 284.png' width={160} height={200}
                className=' absolute left-0 top-0 rotate-[90deg] ' alt='img' />
            <h3 className='text-3xl font-bold text-center pb-12'>Formulaire</h3>

            <Formik initialValues={{ name: '', email: '', message: '', phoneNumber: '', subject: '' }}
                validationSchema={toFormikValidationSchema(validationSchema)}
                onSubmit={handleSubmit}
            >

                <Form >
                    <div className=' flex flex-col z-50 space-y-5 w-full '>
                        <Field
                            id="name"
                            name="name"
                            className='py-4 w-full z-50 px-10 bg-[#FFFFFF1A] foucus:border-[#FFFFFF1A]   border-2 placeholder-white   outline-none'
                            placeholder='Nom et Prénom'
                            type="text" />
                        <ErrorMessage component='div' name="name" className="text-black" />

                        <Field
                            id='email'
                            name='email'
                            className='py-4 px-10 bg-[#FFFFFF1A]   border-2 placeholder-cyan-50   outline-none'
                            placeholder='Email'
                            type="email" />
                        <ErrorMessage component='div' name="email" className="text-black" />

                        <div className='flex flex-col lg:flex-row justify-between gap-4'>
                            <div>
                                <Field
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    className='py-4 px-10 w-full bg-[#FFFFFF1A]   border-2 placeholder-cyan-50   outline-none'
                                    placeholder='Numéro de téléphone' />
                                <ErrorMessage component='div' name="phoneNumber" className="text-black" />

                            </div>
                            <div>
                                <Field
                                    id='subject'
                                    name='subject'
                                    className='py-4 px-10 w-full bg-[#FFFFFF1A]   border-2  placeholder-cyan-50  outline-none'
                                    placeholder='Sujet' type="text" />
                                <ErrorMessage component='div' name="subject" className="text-black" />

                            </div>
                        </div>
                        <Field
                            id='message'
                            name='message'

                            as='textarea'
                            className='py-2 px-10 h-[200px] bg-[#FFFFFF1A]   border-2 placeholder-cyan-50   outline-none'
                            placeholder='Message...' />
                        <ErrorMessage component='div' name="message" className="text-black" />

                        <div className='m-auto'>
                            <button placeholder='submit' type='submit' className='py-5 z-50 relative mt-10 px-20 bg-white font-semibold text-sm text-[#E3C08D]'>
                                ENVOYER
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
            {/* <ToastContainer
                position="top-center"
                // autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // className={'z-[1000] absolute'}
            /> */}

            {showConfetti && (
                <Confetti
                    // width={window.innerWidth}
                    width={frames}
                    height={window.innerHeight}
                    // height={frames}
                    recycle={false}
                />
            )}
        </div>
    )
}

export default FormCard