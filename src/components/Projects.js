import React, {useRef} from 'react'
import '../styles/Projects.css'
import discord from '../img/discord.png'
import {FaGithub} from 'react-icons/fa'
import faceit from '../img/faceit.png'
export const Projects = () => {
    const discordRef = useRef(null)
    const aimRef = useRef(null)
    const morningRef = useRef(null)
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
                                <div className="source-btn" onClick={()=>aimRef.current.click()}>Source Code</div>
                                <a style={{display: "none"}} href="https://github.com/JustinHLe/aim-trainer" target="_blank" rel='noreferrer noopener' ref={aimRef}></a>
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
                                <div className="source-btn" onClick={()=>morningRef.current.click()}>Source Code</div>
                                <a style={{display: "none"}} href="https://github.com/JustinHLe/morning_bot" target="_blank" rel='noreferrer noopener' ref={morningRef}></a>
                            </div>
                        </div>
                        <div className="project-img">
                        <FaGithub className="github"/>
                        </div>
                    </li>

                    
                    <li className="project">
                        <div className="project-description-container">
                            <h1 className="project-header">Faceit API</h1>
                            <p className="project-desc">Application built with MaterialUI and Typescript with the purpose of exploring Faceit's API. 
                            Displays the top CS:GO players in the US region and allows user to search and view player statistics.
                            </p>
                            <div className="project-btn-containers">
                                {/* <div className="live-btn">See Live</div> */}
                                <div className="source-btn" onClick={()=>morningRef.current.click()}>Source Code</div>
                                <a style={{display: "none"}} href="https://github.com/JustinHLe/faceitAPI" target="_blank" rel='noreferrer noopener' ref={morningRef}></a>
                            </div>
                        </div>
                        <div className="project-img">
                        <img src={faceit} alt="faceit"></img>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}