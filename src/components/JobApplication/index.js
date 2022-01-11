import React from 'react'
import {AppWrapper, ContactForm} from './AppStyle'
import emailjs from '@emailjs/browser'

function Application() {

    const sendJobMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_kqlo7bq', e.target, 'user_JbMicfL4zdJ2jy5919PB5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    } 

    return (
        <AppWrapper data-aos="zoom-out">
            <h1>APPLICATION</h1>

            <ContactForm>
                <form onSubmit={sendJobMail}>
                    <h3>Contact Information</h3>

                    <div className='fullname'>
                        <div className="fname">
                            <label htmlFor="fname">First name</label>
                            <input type="text" name="fname" placeholder='John' required />
                        </div>

                        <div className="lname">
                            <label htmlFor="lname">Last name</label>
                            <input type="text" name="lname" placeholder='Doe' required />
                        </div>
                    </div>

                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder='email@gmail.com' />

                    <label htmlFor="number">Phone number</label>
                    <input type="tel" name="number" required placeholder='+639234654965' />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" required placeholder='Badiangan, Iloilo' />

                    <h3>Additional Information</h3>

                    <label htmlFor="job">What job will you apply for? </label>
                    <input type="text" name="job" placeholder='Job name...' required />

                    <label htmlFor="type">Job Type</label>
                    <input type="text" name="type" placeholder='Full-time/Part-time/Contract/Internship' required />

                    <label htmlFor="skills">Skills related for the job</label>
                    <input type="text" name="skills" />
                    

                    <div className='submitApp'>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </ContactForm>
        </AppWrapper>
    )
}

export default Application
