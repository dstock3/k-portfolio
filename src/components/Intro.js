import React from 'react';
import desc from '../data/desc.json'

function Intro() {
  return(
    <section className="intro">
        <h1>{desc.name}</h1>
        <h2>{desc.position}</h2>
        <p>{desc.intro}</p>
        <p>{desc.description}</p>
        <a href="https://www.linkedin.com/in/kayla-stockdale-27b64448/">LinkedIn</a>
        <a href={`mailto: ${desc.email}`}>E-mail</a>
    </section>
  )
}

export default Intro;
