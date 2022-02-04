import React from 'react';
import content from '../data/content.json'
import '../css/portfolio.css'

function Portfolio(props) {
  return (
    <section className="portfolio">
        {Object.keys(content).map((keyName) => (
            <div className="category">
                <h3>{keyName}</h3>
                <div className="row">
                    {Object.keys(content[keyName]).map((article)=>(
                        <article className="writing" id={article}>
                            <h4 className='article-title'>
                                <a href={content[keyName][article].source} className="article-link" target="_blank" rel="noopener noreferrer">{
                                    content[keyName][article].title}
                                </a>
                            </h4>
                            {content[keyName][article].img ? 
                                <div className="article-image-container">
                                    <img className="article-image" src={content[keyName][article].img.source} alt={content[keyName][article].img.alt}></img>
                                </div> : null
                            }
                            <p>{content[keyName][article].client}</p>
                            {content[keyName][article].date ?
                                <p>{content[keyName][article].date}</p> : null
                            }
                            <p>{content[keyName][article].desc}</p>
                        </article>

                    ))}
                </div>
            </div>
        ))}
    </section>
    )
}

export default Portfolio;
