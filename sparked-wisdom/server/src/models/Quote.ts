import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/connections.js';

// Define an interface for the attributes (fields) of Quote
interface QuoteAttributes {
  quote_id: number;
  content: string;
  author: string;
}

// Optional attributes interface for creation
interface QuoteCreationAttributes extends Optional<QuoteAttributes, 'quote_id'> {}

class Quote extends Model<QuoteAttributes, QuoteCreationAttributes> implements QuoteAttributes {
  quote_id!: number;
  content!: string;
  author!: string;
}

Quote.init(
  {
    quote_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Quote',
    tableName: 'quotes',
    timestamps: false, // No `createdAt` or `updatedAt` fields
  }
);

export default Quote;