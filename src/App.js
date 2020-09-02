import React, { useState } from 'react';
import Header from './components/Header.js'
import Form from './components/Form.js'
import Message from './components/Message.js'
import Result from './components/Result.js'
import Spinner from './components/Spinner.js'


import './App.css';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [term, setTerm] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  let component;

  if (loading) {
    component = <Spinner />
  } else if (total === 0) {
    component = <Message />
  } else {
    component = <Result
      total={total}
      term={term}
      quantity={quantity} />
  };


  return (
    <>
      <Header title='Cotizador de prestamos'></Header>
      <div className='container'>
        <Form
          quantity={quantity}
          setQuantity={setQuantity}
          term={term}
          setTerm={setTerm}
          setTotal={setTotal}
          setLoading={setLoading}>
        </Form>
        <div className='mensajes'>
          {component}
        </div>
      </div>
    </>
  );
}

export default App;
