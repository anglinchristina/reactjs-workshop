import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';

const App = props => {
  return (
    <div>
      <AppRoutes {...props} />
     </div>
  );
};

export default App;