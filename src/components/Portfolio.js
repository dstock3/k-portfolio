import React, {useState} from 'react';
import { content } from '../data/content.js'
import '../css/portfolio.css'


function Portfolio(props) {
    //const [select, setSelect] = useState(["Automotive Agency", "Content Marketing", "Personal Finance", "Music"])

    return (
        <section className="portfolio">
            {Object.keys(content).map((category) => (
                <div className="category">
                    <h3>{category}</h3>
                        <div className="row"  style={{ justifyContent: 'center'}}>
                            {Object.keys(content[category]).map((article)=>(
                                <article className="writing" id={content[category][article].id}>
                                    {content[category][article].img ? 
                                        <a href={content[category][article].source} className="img-link" target="_blank" rel="noopener noreferrer">
                                            <div className="article-image-container">
                                                <div className="article-image" alt={content[category][article].img.alt} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${content[category][article].img.source})`}}></div>
                                            </div> 
                                        </a> : null
                                    }
                                    <div className="client">
                                        {content[category][article].client}
                                        {content[category][article].date ?
                                            <> | {content[category][article].date}</> : null
                                        }
                                    </div>
                                    <div className="dec"></div>
                                    <h4 className='article-title'>
                                        <a href={content[category][article].source} className="article-link" target="_blank" rel="noopener noreferrer">{
                                            content[category][article].title}
                                        </a>
                                    </h4>
                                    

                                    <p>{content[category][article].desc}</p>
                                </article>
                            ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio;
