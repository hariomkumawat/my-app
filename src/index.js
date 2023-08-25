import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// way1
// let el=<h1>Hello OM</h1>
// way 2
// import { jsx as _jsx } from "react/jsx-runtime";
// let el =
// /*#__PURE__*/_jsx("h1", {
//     children: "Hello OM"
// });


ReactDOM.render(<App />,document.getElementById('root'))