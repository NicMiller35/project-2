import Carousel from 'react-bootstrap/Carousel';
import Quote from '../utils/interfaces/Quote.interface';
// import Joke from '../utils/interfaces/Joke.interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import CardComponent from './Card';

type CarouselProps = {
  quotes: Quote[];
  handleRemoveQuote: ((quote: Quote) => void) | null;
  addToSavedQuotes?: (() => void) | null;
  onItemClick?: ((quote: Quote) => void) | null;
  onIndexChange?: ((index: number) => void) | null;
};

const CarouselComponent: React.FC<CarouselProps> = ({ quotes, handleRemoveQuote }) => {
  const [index, setIndex] = useState(0);

  const handleOnItemClick = (quote: Quote): void => {
    if (quote) {
      addToSavedQuotes(quote);
    }
  }

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  }

  const addToSavedQuotes = (quote: Quote) => {
    let parsedQuotes: Quote[] = [];
    const savedQuotes = localStorage.getItem('quotes');
    if (typeof savedQuotes === 'string') {
        parsedQuotes = JSON.parse(savedQuotes);
    }
    parsedQuotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(parsedQuotes));
    alert('Quote saved!');
}

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Quotes</h4>
      <Carousel 
      interval={null} 
      activeIndex={index} 
      onSelect={handleSelect} 
      controls={true}
      indicators={false}
      
      >
        {quotes.map((quote, index) => (
          <Carousel.Item key={index}>
            <CardComponent currentQuote={quote} onItemClick={() => {
              handleOnItemClick(quote);
              if (handleRemoveQuote) {
                handleRemoveQuote(quote);
              }
            }}/>
          </Carousel.Item>
        ))};
      </Carousel>
    </div>
  );
}

export default CarouselComponent;