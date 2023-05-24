/* Add JavaScript code here! */
console.log('Hello World! You did it! Welcome to Snowpack :D');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
ReactDOM.render(
       <React.StrictMode>
         <App />
       </React.StrictMode>,
       document.getElementById('divroot1'),
     );
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */ ) {
    undefined /* [snowpack] import.meta.hot */ .accept();
}