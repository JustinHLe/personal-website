import React from 'react' 
import '../styles/Navbar.css'
export const Navbar = () => {
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
    return(
        <div className='nav_container'>
            <div className='logo_container'>
                <h1 className='logo'>JL</h1>
            </div>
            <ul className='list' id="nav-links">
                <li className='list_item'>
                    About Me
                </li>
                <li className='list_item'>
                    Experience
                </li>
                <li className='list_item'>
                    Projects
                </li>
                <li className='list_item'>
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