import React from 'react';
import { Link } from 'react-router-dom';

function Card({article}) {
  return (
    <article className="writing" id={article.id}>
        {article.img ? 
            <a href={article.source} className="img-link" target="_blank" rel="noopener noreferrer">
                <div className="article-image-container">
                    <div className="article-image" alt={article.img.alt} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${article.img.source})`}}></div>
                </div> 
            </a> : null
        }
        <div className="client">
            {article.client}
            {article.date ?
                <> | {article.date}</> : null
            }
        </div>
        <div className="dec"></div>
        {article.type === "pdf" ?
            <h4 className='article-title'>
                <Link className="article-link" target="_blank" rel="noopener noreferrer" to={`/${article.id}`}>{article.title}</Link>
            </h4> :
            <h4 className='article-title'>
                <a href={article.source} className="article-link" target="_blank" rel="noopener noreferrer">
                    {article.title}
                </a>
            </h4>
        }
        <p>{article.desc}</p>
    </article>
  );
}

export default Card;
