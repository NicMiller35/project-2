import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import {User} from './users.js';

// Define an interface for the attributes (fields) of Quote
interface QuoteAttributes {
  quote_id: number;
  content: string;
  author: string;
}

// Optional attributes interface for creation
interface QuoteCreationAttributes extends Optional<QuoteAttributes, 'quote_id'> {}

export class Quote extends Model<QuoteAttributes, QuoteCreationAttributes> implements QuoteAttributes {
  quote_id!: number;
  content!: string;
  author!: string;

  public readonly assignedUser?: User;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function QuoteFactory(sequelize: Sequelize): typeof Quote {
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

  return Quote;
}