import React, {useRef} from 'react'
import '../styles/Projects.css'
import discord from '../img/discord.png'
import {FaGithub} from 'react-icons/fa'

export const Projects = () => {
    const discordRef = useRef(null)
    return(
        <div className="project-container">
            <div className="project-title-container">
                <h1 className="project-title">Projects</h1>
            </div>
            <div className="project-list-container">
                <ul className="project-list">
                    <li className="project">
                        <div className="project-description-container">
                            <h1 className="project-header">Discord Bot</h1>
                            <p className="project-desc">A discord bot with simple commands to help run a discord server.
                                Admin Commands include kick, ban, unban, and clear messages. User commands include testing ping and displaying user 
                                details.
                            </p>
                            <div className="project-btn-containers">
                                {/* <div className="live-btn">See Live</div> */}
                                <div className="source-btn" onClick={()=>discordRef.current.click()}>Source Code</div>
                                <a style={{display: "none"}} href="https://github.com/JustinHLe/discord-bot" target="_blank" rel='noreferrer noopener' ref={discordRef}></a>
                            </div>
                        </div>
                        <div className="project-img">
                            <img src={discord} alt="discord"></img>
                        </div>
                    </li>
                    <li className="project">
                        <div className="project-description-container">
                            <h1 className="project-header">Aim Trainer</h1>
                            <p className="project-desc">Browser "Aim Trainer" game built with React.js and Express. Includes SQL database hosted on Microsoft SQL server.
                            Database holds user information including player name and their score.
                            </p>
                            <div className="project-btn-containers">
                                {/* <div className="live-btn">See Live</div> */}
                                <div className="source-btn" onClick={()=>discordRef.current.click()}>Source Code</div>
                                <a style={{display: "none"}} href="https://github.com/JustinHLe/aim-trainer" target="_blank" rel='noreferrer noopener' ref={discordRef}></a>
                            </div>
                        </div>
                        <div className="project-img">
                        <FaGithub className="github"/>
                        </div>
                    </li>
                    <li className="project">
                        <div className="project-description-container">
                            <h1 className="project-header">Morning Bot</h1>
                            <p className="project-desc">Bot that sends automated messages to Microsoft Teams
                            </p>
                            <div className="project-btn-containers">
                                {/* <div className="live-btn">See Live</div> */}
                                <div className="source-btn" onClick={()=>discordRef.current.click()}>Source Code</div>
                                <a style={{display: "none"}} href="https://github.com/JustinHLe/morning_bot" target="_blank" rel='noreferrer noopener' ref={discordRef}></a>
                            </div>
                        </div>
                        <div className="project-img">
                        <FaGithub className="github"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}