/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </BrowserRouter>
);

export default App;
