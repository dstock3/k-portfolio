import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import { content } from '../data/content.js'
import '../css/portfolio.css'

function Portfolio(props) {
    const [select, setSelect] = useState([{text: "All", id: "all"}, {text: "Social Media", id: "social"}, {text: "Automotive Agency", id: "auto"}, {text: "Content Marketing", id: "marketing"}, {text: "Personal Finance", id: "finance"}, {text: "Music", id: "music"}, {text: "Cryptocurrency and NFTs", id: "crypto"}])
    const [social, setSocial] = useState(content[select[1].text])
    const [auto, setAuto] = useState(content[select[2].text])
    const [marketing, setMarketing] = useState(content[select[3].text])
    const [finance, setFinance] = useState(content[select[4].text])
    const [music, setMusic] = useState(content[select[5].text])
    const [crypto, setCrypto] = useState(content[select[6].text])
    const [contentSelection, setContentSelection] = useState(content)
    const [categoryHead, setCategoryHead] = useState("All")
    const [selection, setSelection] = useState(false)

    const selectCategory = (item, content) => {
        switch(item) {
            case "All":
                setContentSelection(content);
                setSelection(false);
                setCategoryHead("All");
                break;
            case "Social Media":
                setContentSelection(social);
                setSelection(true);
                setCategoryHead("Social Media");
                break;
            case "Automotive Agency":
                setContentSelection(auto);
                setSelection(true);
                setCategoryHead("Automotive Agency");
                break;
            case "Content Marketing":
                setContentSelection(marketing);
                setSelection(true);
                setCategoryHead("Content Marketing");
                break;
            case "Personal Finance":
                setContentSelection(finance);
                setSelection(true);
                setCategoryHead("Personal Finance");
                break;
            case "Music":
                setContentSelection(music);
                setSelection(true);
                setCategoryHead("Music");
                break;
            case "Cryptocurrency and NFTs":
                setContentSelection(crypto);
                setSelection(true);
                setCategoryHead("Cryptocurrency and NFTs");
                break;
            default:
                setContentSelection(content);
                setSelection(false);
                setCategoryHead("All");
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
                {select.map((item) => (
                    <div className="select" key={item.id} id={item.id} onClick={()=> selectCategory(item.text, content)}>{item.text}</div>
                ))}
            </div>

            {!selection ?
                <>
                    {Object.keys(content).map((category, index) => (
                        <div className="category" key={content[category] + index}>
                            <h3>{category}</h3>

                            <div className="dec-line"></div>

                            <div className="row"  style={{ justifyContent: 'center'}}>
                                {Object.keys(content[category]).map((article)=>(
                                    <Card article={content[category][article]} key={content[category][article].id} />
                                ))}
                            </div>
                        </div>
                    ))}
                </> :
                <div className="category">
                    <h3>{categoryHead}</h3>

                    <div className="dec-line"></div>

                    <div className="row"  style={{ justifyContent: 'center'}}>
                        {Object.keys(contentSelection).map((article)=>(
                            <Card article={contentSelection[article]} key={contentSelection[article].id} />
                        ))}
                    </div>
                </div>
            }
        </section>
    )
}

export default Portfolio;
