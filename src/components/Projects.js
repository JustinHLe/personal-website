import React from 'react'
import '../styles/Projects.css'
import discord from '../img/discord.png'
export const Projects = () => {
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
                                <div className="live-btn">See Live</div>
                                <div className="source-btn">Source Code</div>
                            </div>
                        </div>
                        <div className="project-img">
                            <img src={discord} alt="discord"></img>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}