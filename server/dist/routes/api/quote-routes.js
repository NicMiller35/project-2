import express from 'express';
import { Quote } from '../../models/Quote.js';
const router = express.Router();
// GET /quotes - Get all quotes
router.get('/', async (_req, res) => {
    try {
        const quotes = await Quote.findAll();
        res.json(quotes);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
// POST /quotes - Create a new quote
router.post('/', async (req, res) => {
    const { q, a, i } = req.body;
    try {
        const newQuote = await Quote.create({
            content: q,
            author: a,
            img_url: i
        });
        res.status(201).json(newQuote);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
// DELETE /quotes/:id - Delete a quote by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const quote = await Quote.findByPk(id);
        if (quote) {
            await quote.destroy();
            res.json({ message: 'Quote deleted' });
        }
        else {
            res.status(404).json({
                message: 'Quote id not found'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
export { router as quoteRouter };
