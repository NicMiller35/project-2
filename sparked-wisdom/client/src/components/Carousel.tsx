import Carousel from 'react-bootstrap/Carousel';
import Quote from '../utils/interfaces/Quote.interface';
// import Joke from '../utils/interfaces/Joke.interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import CardComponent from './Card';

type CarouselProps = {
  quotes: Quote[];
};

const CarouselComponent: React.FC<CarouselProps> = ({ quotes }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  }

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Quotes</h4>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect} controls={true}>
        {quotes.map((quote, index) => (
          <Carousel.Item key={index}>
            <CardComponent currentQuote={quote} />
          </Carousel.Item>
        ))};
      </Carousel>
    </div>
  );
}

export default CarouselComponent;