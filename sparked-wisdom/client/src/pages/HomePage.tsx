import { useState } from 'react';
import Quote from '../utils/interfaces/Quote.interface';
import Joke from '../utils/interfaces/Joke.interface';
import { getQuotes, getJokes } from '../api/API';

const HomePage = () => {
    const [quote, setQuote] = useState<Quote[] | null>([]);
    const [joke, setJoke] = useState<Joke[] | null>([]);

    const fetchQuote = async () => {
        const data: Quote[] = await getQuotes();
        setQuote(data);
        setJoke([]);
    };

    const fetchJoke = async () => {
        const data: Joke[] = await getJokes('dogs');
        setJoke(data);
        setQuote([]);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={fetchQuote}>Fetch Quote</button>
            <button onClick={fetchJoke}>Fetch Joke</button>
            <div>
                {quote && quote.map((q, index) => (
                    <blockquote key={index}>
                        <p>{q.q}</p>
                        <footer>{q.a}</footer>
                    </blockquote>
                ))}
            </div>
            <div>
                {joke && joke.map((j, index) => (
                    <p key={index}>{j.joke}</p>
                ))}
            </div>
        </div>
    );
};

export default HomePage;