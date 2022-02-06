import React, { useState, useRef, useEffect } from 'react';
import Card from './Card.js';
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
                                        <Card article={content[category][article]} />
                                    ))}
                                </div>
                        </div>
                    ))}
                </> :
                <div className="category">
                    <h3>{categoryHead.current}</h3>
                    <div className="row"  style={{ justifyContent: 'center'}}>
                        {Object.keys(contentSelection).map((article)=>(
                            <Card article={contentSelection[article]} />
                        ))}
                    </div>
                </div>
            }
        </section>
    )
}

export default Portfolio;
