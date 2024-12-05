import { useState, useEffect } from 'react';
import Quote from '../utils/interfaces/Quote.interface';
// import Joke from '../utils/interfaces/Joke.interface';
import { getQuotes } from '../api/API'; //, getJokes
import CarouselComponent from '../components/Carousel';


const HomePage = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    // const [jokes, setJokes] = useState<Joke[] | null>([]);
    const [currentQuote, setCurrentQuote] = useState<Quote>({
        a: '',
        h: '',
        i: '',
        q: '',
    });

    const handleSaveQuote = (quote: Quote) => {
        setCurrentQuote(quote);
    }

    const fetchQuote = async () => {
        const data: Quote[] = await getQuotes();
        setQuotes(data);
        // setJokes([]);
    };

    // const fetchJoke = async () => {
    //     const data: Joke[] = await getJokes('dogs');
    //     setJokes(data);
    //     setQuotes([]);
    // };

    useEffect(() => {
        fetchQuote();
    }, []);


    const addToSavedQuotes = () => {
        let parsedQuotes: Quote[] = [];
        const savedQuotes = localStorage.getItem('quotes');
        if (typeof savedQuotes === 'string') {
            parsedQuotes = JSON.parse(savedQuotes);
        }
        parsedQuotes.push(currentQuote);
        localStorage.setItem('quotes', JSON.stringify(parsedQuotes));
        alert('Quote saved!');
    }

    return (
        <div>
            <CarouselComponent quotes={quotes} addToSavedQuotes={addToSavedQuotes} onItemClick={handleSaveQuote}/>
            {/* <h1>Home Page</h1>
            <button type="button" onClick={fetchQuote}>Fetch Quote</button>
            <button type="button" onClick={fetchJoke}>Fetch Joke</button>
            <div>
                {quotes && quotes.map((q, index) => (
                    <blockquote key={index}>
                        <p>{q.q}</p>
                        <footer>{q.a}</footer>
                    </blockquote>
                ))}
            </div>
            <div>
                {jokes && jokes.map((j, index) => (
                    <p key={index}>{j.joke}</p>
                ))}
            </div> */}
        </div>
    );
};

export default HomePage;