import React from 'react' 
import '../styles/Navbar.css'
export const Navbar = ({aboutRef, expRef, projectRef, contactRef}) => {
    const navSlide = (e) => {
        const burger = document.getElementById('burger')
        const nav = document.getElementById("nav-links")
        nav.classList.toggle('nav_active')
        const navLinks = document.querySelectorAll('.list li')
        navLinks.forEach((item,index)=>{
            if(item.style.animation){
                item.style.animation = ""
            } else{
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
        })
        burger.classList.toggle('toggle')
    }
    const handleScroll = (e) => {
        const navLink = e.target.innerText
        if(navLink === "JL"){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
        if(navLink === "About Me"){
            aboutRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        if(navLink === "Experience"){
            expRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        if(navLink === "Projects"){
            projectRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        if(navLink === "Contact"){
            contactRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }
    return(
        <div className='nav_container'>
            <div className='logo_container'>
                <h1 className='logo' onClick={handleScroll}>JL</h1>
            </div>
            <ul className='list' id="nav-links">
                <li className='list_item' onClick={handleScroll}>
                    About Me
                </li>
                <li className='list_item' onClick={handleScroll}>
                    Experience
                </li>
                <li className='list_item' onClick={handleScroll}>
                    Projects
                </li>
                <li className='list_item' onClick={handleScroll}>
                    Contact
                </li>
            </ul>
            <div className='burger' id ="burger" onClick={navSlide}>
                <div className='burger_line1'></div>
                <div className='burger_line2'></div>
                <div className='burger_line3'></div>
            </div>
        </div>
    )
}