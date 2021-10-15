import React, { useRef } from 'react'
import '../styles/Contact.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import emailjs from 'emailjs-com';
export const Contact = ({contactRef}) => {
    const gitLink = useRef(null)
    const linked = useRef(null)
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_4qmex9w', 'template_ljce4a8', e.target, 'user_Ny7PV7c1AEf1qkifuiMJp')
        .then((result) => {
           console.log(result)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="contact-container">
            <div className="contact-title-container">
                <h1 className="contact-title">Contact Me</h1>
            </div>
            <div className="contact-links">
                <FaGithub className="github" onClick={()=>gitLink.current.click()}/>
                <a ref = {gitLink} href="https://github.com/JustinHLe" target="_blank" style={{display: "none"}}/>
                <FaLinkedin  className="linkedin" onClick={()=>{linked.current.click()}}/>
                <a ref = {linked} href="https://www.linkedin.com/in/justin-le-334539177/" target="_blank" style={{display: "none"}}/>
            </div>
            <div>
                <form className="contact-form" id="form" onSubmit={sendEmail}>
                    <input type="search" placeholder="Your Email" name="name"></input>
                    <input type="search" placeholder="Subject" name="subject"></input>
                    <textarea type="text" placeholder="Message" name="message"></textarea>
                    <button type="submit" className="submit-btn">Send Email</button>
                </form>
            </div>
        </div>
    )
}