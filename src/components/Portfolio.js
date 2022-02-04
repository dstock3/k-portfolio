import React, { useState, useEffect } from 'react';
import content from '../data/content.json'

function Portfolio() {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        let categoryArray = []
        if (content) {
            for (let prop in content) {
                categoryArray.push(content[prop])
            }
        }
        setCategories(categoryArray)
    }, [])
    console.log(categories)


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
