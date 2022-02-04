import React from 'react';
import content from '../data/content.json'

function Portfolio() {
  return (
    <section className="portfolio">
        {Object.keys(content).map((keyName, i) => (
            <div className="category" id={keyName}>
                <h3>{keyName}</h3>
                <div className="row">
                    {Object.keys(content[keyName]).map((article, i)=>(
                        <article className={article}>
                            <h4>
                                <a href={content[keyName][article].source} target="_blank" rel="noopener noreferrer">{
                                    content[keyName][article].title}
                                </a>
                            </h4>
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
