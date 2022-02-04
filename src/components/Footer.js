import React from 'react';
import desc from '../data/desc.json'

function Footer() {

  return (
    <footer>
        <div className="social">
            <div className="connect">
                Connect with me on Social Media
            </div>
            <div className="social-links">
                    <a href={desc.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={`mailto: ${desc.email}`}>E-mail</a>
            </div>
            
        </div>
        <div className="copyright">Copyright © 2022 by Kayla Kinney Stockdale</div>
        
    </footer>
  )
}

export default Footer;
