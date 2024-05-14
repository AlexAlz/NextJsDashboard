import React from 'react';

const TableComponent = () => {
  // Obtén el número de días en el mes actual
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Crea un array con los días del mes
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <table>
      <thead>
        <tr>
          <th>UEN</th>
          <th>Meta</th>
          {days.map((day) => (
            <th key={day}>{`${day}-${month + 1}-${year}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Aquí puedes agregar las filas de la tabla */}
      </tbody>
    </table>
  );
};

export default TableComponent;