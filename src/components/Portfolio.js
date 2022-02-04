import React from 'react';
import content from '../data/content.json'

function Portfolio() {
  return (
    <section className="portfolio">
        {Object.keys(content).map((keyName, i) => (

            <div className={keyName}>
                <h3>{keyName}</h3>
                {Object.keys(content[keyName]).map((article, i)=>(
                    <article className={article}>
                        <div>{article.title}</div>
                    </article>

                ))}
            </div>
        ))}

    </section>
    )
}

export default Portfolio;
