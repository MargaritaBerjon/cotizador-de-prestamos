import React from 'react';

const Result = ({ total, term, quantity }) => (
  <div className='u-full-width resultado'>
    <h2>Resumen</h2>
    <p>Prestamo solicitado: {quantity} €</p>
    <p>Plazo: {term} meses</p>
    <p>Importe mensual: {(total / term).toFixed(2)} €</p>
    <p>Total a pagar: {(total).toFixed(2)} €</p>
  </div>
);





export default Result;