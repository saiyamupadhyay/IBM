import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Card from './Card';
import Dropdown from "./Dropdown"
import Employee from "./Employee"
// setInterval(()=>{

// var today=new Date();
// var hours = today.getHours();
// var minutes = today.getMinutes();
// var seconds = today.getSeconds();
//   ReactDOM.render(
//   <React.StrictMode>
//     <Card title="My React App" hours={hours} minutes={minutes} seconds={seconds}></Card>

//   </React.StrictMode>,
//   document.getElementById('root')
// );
// },1000)

ReactDOM.render(
  <React.StrictMode>

    <Dropdown caption="Select Courses" />
    <Employee></Employee>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
