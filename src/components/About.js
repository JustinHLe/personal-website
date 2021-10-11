import React, { useEffect } from 'react'
import me from '../img/me.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
import '../styles/About.css'

export const About = () => {
    useEffect(()=>{
        Aos.init({ duration: 2000 })
    },[])
    return(
        <div className="about-container">
            <div className="abt-section">
                <h6 className="abt-title-mobile">About Me</h6>
                <div  data-aos="fade-right"className="abt-first-section">
                        <img src={me} alt="headshot" className="headshot"></img>
                        <div className="skills">Here are some technologies I'm familiar with:</div>
                        <ul className="skills-list">
                            <li className="skill-item">
                                React
                            </li>
                            <li className="skill-item">
                                HTML/CSS
                            </li>
                            <li className="skill-item">
                                Javascript
                            </li>
                            <li className="skill-item">
                                Node.js
                            </li>
                            <li className="skill-item">
                                C++
                            </li>
                            <li className="skill-item">
                                Python
                            </li>
                        </ul>
                </div>
                <div data-aos="fade-left" className="abt-second-section">
                    <div className="abt-title-container">
                        <h1 className="abt-title">About Me</h1>
                    </div>
                    <p className="abt-paragraph">
                        Hello! My name is Justin, and I'm passionate about building things on the
                        internet. My interest for this field was most likely cultivated from my parents,
                        who both work in the tech industry. 
                        <br/>
                        <br/>
                        In recent years I had the opportunity to learn and study computer science at the Univserity 
                        of California, Riverside. I graduated in 2020 with a degree in Computer Science with Business
                        Applications. After graduating, I worked at a couple of start-ups and recently
                        landed my first tech career at Applied Medical as an UI Developer.
                        <br/>
                        <br/>
                        Aside from web development, I enjoy playing videogames, playing guitar, hanging out with family,
                        and working on personal coding projects unrelated to web dev.
                    </p>
                    <div className="skills-mobile">Here are some technologies I'm familiar with:</div>
                        <ul className="skills-list-mobile">
                            <li className="skill-item-mobile">
                                React
                            </li>
                            <li className="skill-item-mobile">
                                HTML/CSS
                            </li>
                            <li className="skill-item-mobile">
                                Javascript
                            </li>
                            <li className="skill-item-mobile">
                                Node.js
                            </li>
                            <li className="skill-item-mobile">
                                C++
                            </li>
                            <li className="skill-item-mobile">
                                Python
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}