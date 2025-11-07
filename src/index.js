// import React from "react";
// function index(){
//   return(
//     <>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <link rel="icon" href="%PUBLIC_URL%/icon.ico" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta
//       name="description"
//       content="Web site created using create-react-app"
//     />
//     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
//     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
//     <title>ARUCI Bank</title>
//   </head>
//   <body>
//     <noscript>You need to enable JavaScript to run this app.</noscript>
//     <div id="root"></div>
    
//   </body>
// </html>
// </>
//   );
// }
// export default index;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();