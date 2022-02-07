import React from 'react'
import App from './App'
import { content } from './data/content.js'
import { HashRouter, Routes, Route } from "react-router-dom"

const RouteSwitch = () => {

    return (
        <HashRouter>
                <Routes>
                        <Route path="/" element={
                            <App />
                        } />

                        {
                            Object.keys(content).map((category) =>
                                <>
                                    {Object.keys(content[category]).map((article)=>( 
                                        <>
                                            {content[category][article].type === "pdf" ?
                                            <Route path={`/${content[category][article].id}`} key={content[category][article].id} element={
                                                <div className="all-page-container">
                                                    <embed src={content[category][article].source} width="100%" height="2000px"/>
                                                </div>
                                            } /> : null}

                                        </>
                                    ))}
                                </>
                            )
                        }
                </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;