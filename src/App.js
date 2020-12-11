
import { useEffect, useState } from 'react';
import './App.css';
import Book from './components/books';

const API = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Ql6iH01QxMG3PiIPHsVvXG0ZRhTlRMTx"
function App() {
  const [ books, setBooks]=useState([]);

  useEffect(()=>{
    fetch(API).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setBooks(data.results.books );

    });

  },[]);   

  return(
    <div>
      <header>
        <div className="navbar">
        <img src="http://www.eatlogos.com/education_logos/png/vector_colourful_book_logo.png" alt=""/>
        <nav>
        <h2>Best-selling Books New York Times</h2>
      </nav>
        </div>
      
      </header>
      
    <div className="book-container">
    {books.length > 0 && books.map((book) =><Book key={book.title}{...book}/>)}
    </div>
    </div>
    
  );
  
}

export default App;
