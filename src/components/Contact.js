import React, { useState, useRef } from 'react'
import '../styles/Contact.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {MdErrorOutline} from "react-icons/md"
import {AiFillCheckCircle} from "react-icons/ai";
import emailjs from 'emailjs-com';


export const Contact = ({contactRef}) => {
    const gitLink = useRef(null)
    const linked = useRef(null)
    const [text, setText] = useState("")
    const [visible, setVisible] = useState(false)
    const [sent, setSent] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault()
        setVisible(true)
        setTimeout(()=>{
            setVisible(false)
        }, 5000)
        if(!e.target[0].value || !e.target[2].value){
            if(!e.target[0].value && !e.target[2].value){
                setText("Please provide an email and message")
                return
            } 
            if(!e.target[0].value){
                setText("Please provide an email")
                return
            }
            if(!e.target[2].value){
                setText("Please provide a message")
                return
            }
        } else {
            setSent(true)
            setText("Email sent!")
            setTimeout(()=>{
                setSent(false)
            }, 5000)
            emailjs.sendForm('service_4qmex9w', 'template_ljce4a8', e.target, 'user_Ny7PV7c1AEf1qkifuiMJp')
            .then((result) => {
               console.log(result)
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }
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
            <div className={visible ? 'email-popup' : 'email-popup-hidden'}>
                <MdErrorOutline className='popup-icon'/>
                <span className= 'error-message'>{text}</span>
            </div>
            <div className={sent ? 'email-popup-success' : 'email-popup-hidden-success'}>
                <AiFillCheckCircle className='popup-icon'/>
                <span className='error-message'>{text}</span>
            </div>
        </div>
    )
}