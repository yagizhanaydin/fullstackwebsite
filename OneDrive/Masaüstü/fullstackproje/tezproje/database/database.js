import pkg from 'pg';
const { Pool } = pkg;

const dbConfig = {
  user: 'postgres',
  password: '12345',
  host: 'localhost',
  port: 5432,
  database: 'myfullstackwebsite',
};

export const pool = new Pool(dbConfig);

pool
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

export default pool;
