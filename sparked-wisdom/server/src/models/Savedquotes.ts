import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './user';
import Quote from './quote';

class SavedQuote extends Model {
  saved_quote_id!: number;
  saved_at!: Date;
}

SavedQuote.init(
  {
    saved_quote_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    saved_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'SavedQuote',
    tableName: 'saved_quotes',
    timestamps: false,
  }
);

// Define relationships
User.belongsToMany(Quote, { through: SavedQuote });
Quote.belongsToMany(User, { through: SavedQuote });

export default SavedQuote;