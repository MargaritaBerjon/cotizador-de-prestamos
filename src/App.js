import React from 'react';
import Header from './components/Header.js'
import Form from './components/Form.js'


import './App.css';

function App() {
  return (
    <>
      <Header title='Cotizador de prestamos'></Header>
      <div className='container'>
        <Form></Form>
      </div>
    </>
  );
}

export default App;
