import React, { useState } from 'react';
import Header from './components/Header.js'
import Form from './components/Form.js'


import './App.css';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [term, setTerm] = useState(0);
  const [total, setTotal] = useState(0);



  return (
    <>
      <Header title='Cotizador de prestamos'></Header>
      <div className='container'>
        <Form
          quantity={quantity}
          setQuantity={setQuantity}
          term={term}
          setTerm={setTerm}
          total={total}
          setTotal={setTotal}>
        </Form>
        <p>Total a pagar: {total}€</p>
      </div>
    </>
  );
}

export default App;
