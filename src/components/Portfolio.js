import React, { useState, useRef, useEffect } from 'react';
import { content } from '../data/content.js'
import '../css/portfolio.css'
import { Document, Page } from 'react-pdf';

function Portfolio(props) {
    const [select, setSelect] = useState(["All", "Automotive Agency", "Content Marketing", "Personal Finance", "Music"])
    const [auto, setAuto] = useState(content[select[1]])
    const [marketing, setMarketing] = useState(content[select[2]])
    const [finance, setFinance] = useState(content[select[3]])
    const [music, setMusic] = useState(content[select[4]])
    const [contentSelection, setContentSelection] = useState(content)
    const selection = useRef(false);
    const categoryHead = useRef(null)

    const selectCategory = (item, content) => {
        switch(item) {
            case "All":
                setContentSelection(content);
                selection.current = false
                break;
            case "Automotive Agency":
                setContentSelection(auto);
                selection.current = true
                categoryHead.current = select[1]
                break;
            case "Content Marketing":
                setContentSelection(marketing);
                categoryHead.current = select[2]
                selection.current = true
                break;
            case "Personal Finance":
                setContentSelection(finance);
                categoryHead.current = select[3]
                selection.current = true
                break;
            case "Music":
                setContentSelection(music);
                selection.current = true
                categoryHead.current = select[4]
                break;
            default:
                setContentSelection(content);
                selection.current = false
                break;
        }   
    }

    useEffect(()=> {
        let selectButtons = Array.from(document.getElementsByClassName("select"))
        for (let i = 0; i < selectButtons.length; i++) {
            let button = selectButtons[i]
            button.addEventListener("click", function(){
                button.classList.add("enabled");
                for (let y = 0; y < selectButtons.length; y++) {
                    if (selectButtons[y].id !== button.id) {
                        selectButtons[y].classList.remove("enabled")
                    }
                }
            })
        }
    }, [])

    return (
        <section className="portfolio">

            <div className="select-container">
                <div className="select" id="all" onClick={()=> selectCategory(select[0])}>{select[0]}</div>
                <div className="select" id="auto" onClick={()=> selectCategory(select[1])}>{select[1]}</div>
                <div className="select" id="marketing" onClick={()=> selectCategory(select[2])}>{select[2]}</div>
                <div className="select" id="finance" onClick={()=> selectCategory(select[3])}>{select[3]}</div>
                <div className="select" id="music" onClick={()=> selectCategory(select[4])}>{select[4]}</div>
            </div>

            {!selection.current ?
                <>
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
                                            {content[category][article].type === "pdf" ?
                                                null :
                                                <h4 className='article-title'>
                                                    <a href={content[category][article].source} className="article-link" target="_blank" rel="noopener noreferrer">{
                                                        content[category][article].title}
                                                    </a>
                                                </h4>
                                            }
                                            <p>{content[category][article].desc}</p>
                                        </article>
                                    ))}
                                </div>
                        </div>
                    ))}
                </> :
                <div className="category">
                    <h3>{categoryHead.current}</h3>
                    <div className="row"  style={{ justifyContent: 'center'}}>
                        {Object.keys(contentSelection).map((article)=>(
                            <article className="writing" id={contentSelection[article].id}>
                                {contentSelection[article].img ? 
                                    <a href={contentSelection[article].source} className="img-link" target="_blank" rel="noopener noreferrer">
                                        <div className="article-image-container">
                                            <div className="article-image" alt={contentSelection[article].img.alt} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${contentSelection[article].img.source})`}}></div>
                                        </div> 
                                    </a> : null
                                }
                                <div className="client">
                                    {contentSelection[article].client}
                                    {contentSelection[article].date ?
                                        <> | {contentSelection[article].date}</> : null
                                    }
                                </div>
                                <div className="dec"></div>
                                {contentSelection[article].type === "pdf" ?
                                    null :
                                    <h4 className='article-title'>
                                        <a href={contentSelection[article].source} className="article-link" target="_blank" rel="noopener noreferrer">{
                                            contentSelection[article].title}
                                        </a>
                                    </h4>
                                }
                                <p>{contentSelection[article].desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            }
        </section>
    )
}

export default Portfolio;
