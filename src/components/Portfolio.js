import React, {useState} from 'react';
import { categories } from '../data/content.js'
import '../css/portfolio.css'


function Portfolio(props) {
    const [select, setSelect] = useState(["Automotive Agency", "Content Marketing", "Personal Finance", "Music"])

    return (
        <section className="portfolio">
            {categories.map((category) => (
                <div className="category">
                    
                    <h3>category</h3>
                    {Object.keys(category).length < 5 ? 
                        <div className="row"  style={{ justifyContent: 'center'}}>
                            {Object.keys(category).map((article)=>(
                                <article className="writing" id={category[article].id}>
                                    <h4 className='article-title'>
                                        <a href={category[article].source} className="article-link" target="_blank" rel="noopener noreferrer">{
                                            category[article].title}
                                        </a>
                                    </h4>
                                    {category[article].img ? 
                                        <div className="article-image-container">
                                            <div className="article-image" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${category[article].img.source})`}}></div>

                                            {/*<img className="article-image" src={category[article].img.source} alt={category[article].img.alt}></img>*/}
                                        </div> : null
                                    }
                                    <p>{category[article].client}</p>
                                        {category[article].date ?
                                            <p>{category[article].date}</p> : null
                                        }
                                    <p>{category[article].desc}</p>
                                </article>
                            ))}
                    </div> :
                    <div className="row">
                        {Object.keys(category).map((article)=>(
                            <article className="writing" id={category[article].id}>
                                <h4 className='article-title'>
                                    <a href={category[article].source} className="article-link" target="_blank" rel="noopener noreferrer">{
                                        category[article].title}
                                    </a>
                                </h4>
                                {category[article].img ? 
                                    <div className="article-image-container">
                                            <div className="article-image" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${category[article].img.source})`}}></div>
                                        {/*<img className="article-image" src={category[article].img.source} alt={category[article].img.alt}></img>*/}
                                    </div> : null
                                }
                                <p>{category[article].client}</p>
                                    {category[article].date ?
                                        <p>{category[article].date}</p> : null
                                    }
                                <p>{category[article].desc}</p>
                            </article>
                        ))}
                    </div>
                    }
                </div>
            ))}
        </section>
    )
}

export default Portfolio;
