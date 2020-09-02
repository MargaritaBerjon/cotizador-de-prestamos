import React, { useState } from 'react';
import { calculateTotal } from '../helpers.js'


const Form = (props) => {
  const { quantity, setQuantity, term, setTerm, total, setTotal } = props;
  const [error, setError] = useState(false)


  const readQueantity = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const readTerm = (e) => {
    setTerm(parseInt(e.target.value))
  }

  const calculateAmount = (e) => {
    e.preventDefault();
    if (quantity === 0 || term === 0) {
      setError(true);
      return;
    }
    setError(false);
    const totalAmount = calculateTotal(quantity, term);

    setTotal(totalAmount);

  }

  return (
    <>
      <form onSubmit={calculateAmount}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={readQueantity}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={readTerm}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? <p className='error'>Todos los campor son obligatorios</p> : null}

    </>
  );
}

export default Form;