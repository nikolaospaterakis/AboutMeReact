import React from "react"


export default function Main(){
    return (
        <main>
            <img src="./images/freddie.jpg" alt="An image of me"/>
            <h2>Nikos Paterakis</h2>
            <h3 className="main-pro">Frontend Developer</h3>
            <h4>nikospaterakis.website</h4>
            <div className="btns">
                <button className="btn-enve"><i className="fa-solid fa-envelope"></i> Email</button>
                <button className="btn-link"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
            <div className="main-about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="main-int">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}