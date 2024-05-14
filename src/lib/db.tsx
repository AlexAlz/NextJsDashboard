import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

export default async function executeQuery({ query, values }: { query: string, values?: any[] }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    throw new Error('Error en la base de datos');
  }
}
