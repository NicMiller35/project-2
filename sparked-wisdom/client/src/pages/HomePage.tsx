import { useState, useEffect } from 'react';
import Quote from '../utils/interfaces/Quote.interface';
// import Joke from '../utils/interfaces/Joke.interface';
import { getQuotes } from '../api/API'; //, getJokes
import CarouselComponent from '../components/Carousel';


const HomePage = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    // const [jokes, setJokes] = useState<Joke[] | null>([]);

    const fetchQuotes = async () => {
        try {
            const data: Quote[] = await getQuotes();
            console.log('Data:', data);
            setQuotes(data);
        } catch (err) {
            console.log('an error occurred', err);
        }
    };

    const handleRemoveQuote = (quote: Quote) => {
        let quoteList: Quote[] = quotes;
        quoteList = quotes.filter((q) => q.q !== quote.q);
        if (quoteList.length !== 0) {
            setQuotes(quoteList);
        }
    };

    // const fetchJoke = async () => {
    //     const data: Joke[] = await getJokes('dogs');
    //     setJokes(data);
    //     setQuotes([]);
    // };

    useEffect(() => {
        fetchQuotes();
    }, []);


    return (
        <div>
            <CarouselComponent quotes={quotes} handleRemoveQuote={handleRemoveQuote}/>
        </div>
    );
};

export default HomePage;