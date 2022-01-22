import React, {useEffect} from 'react'
import '../styles/Experience.css'
import applied from '../img/applied.png'
import ucr from '../img/ucr.png'
import sano from '../img/sano.png'
import onnn3 from '../img/onnn3.png'
import Aos from "aos"
import "aos/dist/aos.css"
export const Experience = () => {
    useEffect(()=>{
        Aos.init({ 
            duration: 1000, 
            once: true 
        })
    },[])
    return(
        <div className="exp-container">
                <div className="exp-title-container">
                    <span className="exp-title">
                        Experience
                    </span>
                </div>
                <div className="exp-list-container">
                    <ul className = "exp-list">
                        <li  data-aos="fade-left"  className="exp-card">
                                    <div className="card-data">
                                        <div className="exp-img-container">
                                            <img src={applied} alt = "applied"/>
                                        </div>
                                        <h1 className="job-title">UI Developer</h1>
                                        <h3 className="job-place">Applied Medical</h3>
                                        <div className="location-container">
                                            <h4 className="job-date">Sep 2021 - Present </h4>
                                            <div className="separator"></div>
                                            <h4 className="job-location">Irvine, CA </h4>
                                        </div>
                                        <div className="job-description">
                                            <li>
                                                Apart of Applied Technology Services frontend development team.
                                            </li>
                                        </div>
                                        <div className="job-technologies-container">
                                            <div className="technology">
                                                <h1>React</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>Javascript</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>Webpack</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>HTML</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>CSS</h1>
                                            </div>
                                        </div>
                                    </div>
                        </li>
                        <li  data-aos="fade-left"  className="exp-card">
                                    <div className="card-data">
                                    <div className="exp-img-container">
                                            <img src={sano} alt = "sano"/>
                                        </div>
                                        <h1 className="job-title">Frontend Developer</h1>
                                        <h3 className="job-place">SanoMind</h3>
                                        <div className="location-container">
                                            <h4 className="job-date">Jan 2021 - Sep 2021</h4>
                                            <div className="separator"></div>
                                            <h4 className="job-location">Remote</h4>
                                        </div>
                                        <ul className="job-description">
                                            <li>
                                                Developed audio streaming platform for therapist and mental health patients.
                                            </li>
                                            <li>
                                                Connected web client to AWS backend with Appsync GraphQL API to dynamically
                                                perform CRUD operations.
                                            </li>
                                            <li>
                                                Referenced UI/UX components from Adobe XD and recreated them with Javascript, HTML, and CSS.
                                            </li>
                                        </ul>
                                        <div className="job-technologies-container">
                                            <div className="technology">
                                                <h1>React/Next.js</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>Javascript</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>GraphQL</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>AWS</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>HTML</h1>
                                            </div>
                                            <div className="technology">
                                                <h1>CSS</h1>
                                            </div>
                                        </div>
                                    </div>                      
                        </li>
                        <li data-aos="fade-left"  className="exp-card">
                                <div className="card-data">
                                    <div className="exp-img-container">
                                            <img src={onnn3} className="onnn3" alt = "onnn3"/>
                                        </div>
                                    <h1 className="job-title">SWE Intern</h1>
                                    <h3 className="job-place">Onnn3</h3>
                                    <div className="location-container">
                                        <h4 className="job-date">Jun 2020 - Sep 2020</h4>
                                        <div className="separator"></div>
                                        <h4 className="job-location">Remote</h4>
                                    </div>
                                    <ul className="job-description">
                                        <li>
                                            Web scraped data off websites using various python scrapers such 
                                            as Selenium and Beautifulsoup
                                        </li>
                                        <li>
                                            Organized data into csv files and inserted data into 
                                            MariaDB 
                                        </li>
                                    </ul>
                                    <div className="job-technologies-container">
                                        <div className="technology">
                                            <h1>Python</h1>
                                        </div>
                                        <div className="technology">
                                            <h1>Selenium</h1>
                                        </div>
                                        <div className="technology">
                                            <h1>BeautifulSoup</h1>
                                        </div>
                                    </div>
                                </div>
                        </li>
                        <li data-aos="fade-left"  className="exp-card">
                                <div className="card-data">
                                        <div className="exp-img-container">
                                            <img src={ucr} alt = "ucr"/>
                                        </div>
                                    <h1 className="job-title">Undergraduate</h1>
                                    <h3 className="job-place">University of Californa, Riverside</h3>
                                    <div className="location-container">
                                        <h4 className="job-date">Sep 2016 - Jun 2020</h4>
                                        <div className="separator"></div>
                                        <h4 className="job-location">Riverside, CA</h4>
                                    </div>
                                    <ul className="job-description">
                                        <li>
                                            Studied Computer Science with Business Applications
                                        </li>
                                        <li>
                                            Worked with a full stack development team to deploy a web page for UCR’s annual cutiehack
                                        </li>
                                    </ul>
                                    <div className="job-technologies-container">
                                        <div className="technology">
                                            <h1>Data Structures</h1>
                                        </div>
                                        <div className="technology">
                                            <h1>UNIX/Linux</h1>
                                        </div>
                                        <div className="technology">
                                            <h1>C++</h1>
                                        </div>
                                        <div className="technology">
                                            <h1>SQL</h1>
                                        </div>
                                        <div className="technology">
                                            <h1>Assembly</h1>
                                        </div>
                                    </div>
                            </div>
                        </li> 
                    </ul>
                </div>
    </div>
    )
}