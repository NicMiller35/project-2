import sequelize from '../config/connections.js';
import { UserFactory } from './users.js';
import { SavedQuoteFactory } from './SavedQuotes.js';
import { QuoteFactory } from './Quote.js';




const User = UserFactory(sequelize);
const Quote = QuoteFactory(sequelize);
const SavedQuote = SavedQuoteFactory(sequelize);

User.hasMany(SavedQuote, { foreignKey: 'user_id' });
SavedQuote.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

export { User, Quote, SavedQuote };