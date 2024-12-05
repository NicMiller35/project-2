import type React from "react";
import { useState, useEffect } from 'react';
import type Quote from "../utils/interfaces/Quote.interface";
// import type Quote from "../interfaces/Quote.interface";
import QuoteList from "../components/QuoteList";

const SavedQuotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    const removeFromStorage = (
        e: React.MouseEvent<SVGElement>,
        q: string | null
    ) => {
        e.preventDefault();
        let parsedQuotes: Quote[] = [];
        const savedQuotes = localStorage.getItem('quotes');
        if(typeof savedQuotes === 'string') {
            parsedQuotes = JSON.parse(savedQuotes);
        }
        parsedQuotes = parsedQuotes.filter(
            (quote) => quote.q !== q
        );
        setQuotes(parsedQuotes);
        localStorage.setItem('quotes', JSON.stringify(parsedQuotes));
    };

    useEffect(() => {
        const savedQuotes = localStorage.getItem('quotes');
        if (savedQuotes) {
            setQuotes(JSON.parse(savedQuotes));
        }
    }, []);

    return (
        <>
            {(!quotes?.length || quotes?.length === 0) ? (
                <h1 style={{ margin: '16px 0' }}>No Quotes Found</h1>
            ) : (
            
            <QuoteList 
            quotes={quotes} removeFromStorage={removeFromStorage} />
            )}
        </>
    );
};

export default SavedQuotes;