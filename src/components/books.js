import React from 'react';

const book = ({title, book_image,amazon_product_url,description,author,rank_last_week,publisher}) => (
    <div className="overall">
        <div className="book">
        <img src={book_image} alt={title}/>
         <div className="book-info">
             <h3>{title}</h3>
             <span>{author}</span>
             <span></span>
         </div> 
         <div className="book-description">
             <div className="book-overview">
             <h2>{title}</h2>
             <p><i>{description}</i></p>
             </div>
             
             <p className='publisher'>Published by {publisher}</p>
             <p>Last week in rank no {rank_last_week}</p>
             <span><a href={amazon_product_url}>Purchase from Amazon</a></span>

         </div>
    </div>

    </div>
    
);

export default book;