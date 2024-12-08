import type React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import type Quote from '../utils/interfaces/Quote.interface';

type QuoteListProps = {
  quotes: Quote[];
  removeFromStorage: ((
      e: React.MouseEvent<SVGElement>,
      q: string | null
    ) => void) | null;
}

const QuoteList = ({
  quotes,
  removeFromStorage
} : QuoteListProps) => {
  return (
    <div className= 'quoteLi '>
      <h1>Saved Quotes</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Quote</th>
            <th>Author</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr key={quote.q}>
              <td style={{ textAlign: 'center' }}><img src={quote.i ?? ''} alt={quote.a ?? 'No author'} width="50" /></td>
              <td>{quote.q}</td>
              <td>{quote.a}</td>
                <td style={{ textAlign: 'center' }}>
                <IoIosRemoveCircle
                  style={{ fontSize: '50px', cursor: 'pointer', backgroundColor: 'black', fill: 'red', borderRadius: '50%' }}
                  onClick={(e) => removeFromStorage && removeFromStorage(e, quote.q)}
                />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuoteList;
