import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

const App:React.FC = () => (
  <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Routing />
  </BrowserRouter>
);

export default App;
