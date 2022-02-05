import React, {useState} from 'react';
import { content } from '../data/content.js'
import '../css/portfolio.css'

function Portfolio(props) {
    const [select, setSelect] = useState(["All", "Automotive Agency", "Content Marketing", "Personal Finance", "Music"])
    const [contentSelection, setContentSelection] = useState(content)

    
    const selectCategory = (item, content) => {
        for (let prop in content) {
            if (item == content[prop]) {
                setContentSelection(content[prop])
                console.log(content)
            }
        }
    }
    

    return (
        <section className="portfolio">
            <div className="select-container">
                {select.map((item)=> (
                    <div className="select" onClick={()=> selectCategory(item, contentSelection)}>{item}</div>
                ))}
            </div>
            {Object.keys(contentSelection).map((category) => (
                <div className="category">
                    <h3>{category}</h3>
                        <div className="row"  style={{ justifyContent: 'center'}}>
                            {Object.keys(contentSelection[category]).map((article)=>(
                                <article className="writing" id={content[category][article].id}>
                                    {contentSelection[category][article].img ? 
                                        <a href={contentSelection[category][article].source} className="img-link" target="_blank" rel="noopener noreferrer">
                                            <div className="article-image-container">
                                                <div className="article-image" alt={contentSelection[category][article].img.alt} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${contentSelection[category][article].img.source})`}}></div>
                                            </div> 
                                        </a> : null
                                    }
                                    <div className="client">
                                        {contentSelection[category][article].client}
                                        {contentSelection[category][article].date ?
                                            <> | {contentSelection[category][article].date}</> : null
                                        }
                                    </div>
                                    <div className="dec"></div>
                                    <h4 className='article-title'>
                                        <a href={contentSelection[category][article].source} className="article-link" target="_blank" rel="noopener noreferrer">{
                                            contentSelection[category][article].title}
                                        </a>
                                    </h4>
                                    

                                    <p>{contentSelection[category][article].desc}</p>
                                </article>
                            ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio;
