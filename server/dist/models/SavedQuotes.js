import { Model, DataTypes } from 'sequelize';
export class SavedQuote extends Model {
}
export function SavedQuoteFactory(sequelize) {
    SavedQuote.init({
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
    }, {
        sequelize,
        modelName: 'SavedQuote',
        tableName: 'saved_quotes',
        timestamps: false,
    });
    return SavedQuote;
}
// Define relationships
//User.belongsToMany(Quote, { through: SavedQuote });
//Quote.belongsToMany(User, { through: SavedQuote });
