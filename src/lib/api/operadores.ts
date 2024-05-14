import { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../db';

async function getOperadoresActivos() {
  const query = `
    SELECT
      (SELECT COUNT(*) FROM operadores WHERE estatus <> 'baja') AS total_activos,
      (SELECT COUNT(*) FROM operadores WHERE estatus <> 'baja' AND uen = 'Full') AS activos_full,
      (SELECT COUNT(*) FROM operadores WHERE estatus <> 'baja' AND uen = 'Sencillo Seco') AS activos_sencillo,
      (SELECT COUNT(*) FROM operadores WHERE estatus <> 'baja' AND uen = 'Refrigerado') AS activos_refri,
      (SELECT COUNT(*) FROM operadores WHERE estatus <> 'baja' AND uen = 'Automotriz') AS activos_auto
  `;
  const results = await executeQuery({ query });
  return results;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await getOperadoresActivos();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
}
