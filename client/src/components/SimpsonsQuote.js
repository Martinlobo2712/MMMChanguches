import '../index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiURL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const SimpsonsQuote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(res => {
        console.log(res);
        setQuotes(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return(
    <div>
      <ul>
        {quotes.map(quote => (
          <li className='simpsonsQuote' key={quote.id}>"{quote.quote}" - {quote.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpsonsQuote;
