import { Model, DataTypes } from 'sequelize';
export class Quote extends Model {
}
export function QuoteFactory(sequelize) {
    Quote.init({
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
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Quote',
        tableName: 'quotes',
        timestamps: false, // No `createdAt` or `updatedAt` fields
    });
    return Quote;
}
