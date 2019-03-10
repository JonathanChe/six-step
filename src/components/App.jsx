import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Link to="/">App</Link>
      <Link to="/about">about</Link>
    </div>
  )
}


export default App;
