import React from 'react';
import Loans from './components/loans';
import TotalAmount from './components/total';
import Modal from './components/modal';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h2>Current loans</h2>
      <Loans />
      <TotalAmount />
      <Modal />
    </div>
  );
}

export default App;
