import React from 'react';
import desc from '../data/desc.json'
<<<<<<< HEAD
=======
import profile from '../assets/k-profile.webp'
>>>>>>> 3dbd492619efb9ca193e085150cb6fbd3e3c6b5e
import '../css/intro.css'
import linkedImg from '../assets/linkedin_black.svg'
import emailImg from '../assets/email_black.svg'

function Intro() {
  return(
    <header className="intro">
        <h1 className="intro-name">{desc.name}</h1>
        <h2 className="intro-position">{desc.position}</h2>

        <div className="profile-container">
<<<<<<< HEAD
=======
            {/*
            <div className="profile-pic-container">
                <img src={profile} className="profile-pic" alt="profile"></img>
            </div>
            */}
>>>>>>> 3dbd492619efb9ca193e085150cb6fbd3e3c6b5e
            <div className="profile-info">
                <p className="intro-text">{desc.intro}</p>
                <p className="intro-description">{desc.description}</p>

                <div className="link-container">
                    <a href={desc.linkedin} target="_blank" rel="noopener noreferrer">
                        <img className="link-icon" src={linkedImg} alt="LinkedIn icon"></img>
                    </a>
                    <a href={`mailto: ${desc.email}`}>
                        <img className="link-icon" src={emailImg} alt="E-mail icon"></img>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Intro;
