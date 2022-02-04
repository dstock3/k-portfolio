import React from 'react';
import desc from '../data/desc.json'
import profile from '../assets/k-profile.jpg'

function Intro() {
  return(
    <section className="intro">
        <h1>{desc.name}</h1>
        <h2>{desc.position}</h2>

        <div className="profile-container">
            <div className="profile-pic-container">
                <img src={profile} alt="profile"></img>
            </div>
            <div className="profile-info">
                <p>{desc.intro}</p>
                <p>{desc.description}</p>

                <div className="link-container">
                    <a href="https://www.linkedin.com/in/kayla-stockdale-27b64448/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={`mailto: ${desc.email}`}>E-mail</a>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Intro;
