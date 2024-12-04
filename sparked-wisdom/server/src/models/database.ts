import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string, // Database name
  process.env.DB_USER as string, // Database username
  process.env.DB_PASSWORD as string, // Database password
  {
    host: process.env.DB_HOST, // Hostname (localhost, etc.)
    port: Number(process.env.DB_PORT), // Port (default: 5432 for PostgreSQL)
    dialect: 'postgres', // Database dialect
    logging: false, // Disable logging for cleaner output
  }
);

export default sequelize;