import React from 'react';
import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';

const MessageSection = () => {
    const [errorMessage, setErrorMessage] = useState('')

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message:''
        },

        validationSchema: Yup.object( {
            name: Yup.string()
                .min(2, "You have to write your name!")
                .required("You have to write your name!"),
            email: Yup.string()
                .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Put a valid E-mail adress')
                .required("E-mail is necessary!"),
            message: Yup.string()
                .min(10, "Write atleast 10 letters.")
                .required("Write atleast 10 letters.")

        }),

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    alert('Message have been sent!')
                    break;
                default:
                    setErrorMessage('Something went wrong...')
                    break;
            }
        }
    })



  return (
    <section className="message-section">
        <div className="container">
            <div className="head-text">
                <h2>Leave us a message</h2>
                <h2>for any information.</h2>
            </div>
            <div className="user-input">
                <form onSubmit={form.handleSubmit} noValidate>
                    <p className="errorMessage">{errorMessage}</p>
                    <div className="message-grp">
                        <label className={form.touched.name && form.errors.name ? 'error': ''}>{form.touched.name && form.errors.name ? form.errors.name : 'Name'}</label>
                        <input type="text" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
                    </div>
                    <div className="message-grp">
                        <label className={form.touched.email && form.errors.email ? 'error': ''}>{form.touched.email && form.errors.email ? form.errors.email : 'E-mail'}</label>
                        <input type="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                    </div>
                    <div className="message-grp">
                        <label className={form.touched.message && form.errors.message ? 'error': ''}>{form.touched.message && form.errors.message ? form.errors.message : 'Your Message'}</label>
                        <textarea type="text" name="message" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} />
                    </div>
                <button className="btn-yellow" type="submit" >Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default MessageSection