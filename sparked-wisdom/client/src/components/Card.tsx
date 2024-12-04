import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Quote from '../utils/interfaces/Quote.interface';

type CardProps = {
    currentQuote: Quote;
    addToSavedQuotes?: (() => void) | null;
}

const CardComponent = ({
    currentQuote,
    addToSavedQuotes}: CardProps) => {
    return (
        <Card >
            <Card.Img variant="top" src={currentQuote.i? currentQuote.i : ''} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {currentQuote.q}
                    <footer>{' -- ' + currentQuote.a}</footer>
                </Card.Text>
                <Button variant="primary" onClick={() => addToSavedQuotes?.()}>Save</Button>
            </Card.Body>
        </Card>
    );
};


export default CardComponent;