import { Quote } from '../../models/Quote.js';
export const seedQuotes = async () => {
    await Quote.bulkCreate([
        {
            content: 'The only way to do great work is to love what you do.',
            author: 'Steve Jobs'
        },
        {
            content: 'The best time to plant a tree was 20 years ago. The second best time is now.',
            author: 'Chinese Proverb'
        },
    ], { individualHooks: true });
};
