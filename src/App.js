import React from 'react'
import {ErrorBoundary} from './errorBoundary';
import HomePage from './homePage';

function App() {

  const userData = [ [], "", [], "", [], [], [] ]

  return (
    <div style={{display:'flex', gap:'50px', marginTop:'20px'}}>
      {
        userData.map((data,index)=> <ErrorBoundary key={index}>
        <HomePage data={data} index={index} />
    </ErrorBoundary>)
      }
      
    </div>
  );
}

export default App;
