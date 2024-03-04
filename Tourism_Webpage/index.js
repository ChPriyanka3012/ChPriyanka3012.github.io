import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import Calc from './Calc';*/
/*import App1 from './App1';*/
/*import Result from './Result';
import App2 from './App2';
import Array from './Array';
import Objects from './Objects';
import Callback from './Callback';
import Map from './Map';*/
import './index.css';
import Estoreheader from './Estoreheader';
import Block from './Block';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Estoreheader/>
    <Block/>
   
  </React.StrictMode>
);
/*<Calc num1={2} num2={1} /> //multiply the number
<Callback/> //to print the callback function
<Objects students={{name:"Sandy",age:1} }/> ///for printing the objects
// <Array names={["Sandy","Ruby","Maggie"]} score={[50,20,40]}/> //for printing the array
 <App2 name=""/> //if else condition
<Result marks={70}/> //if else
<App name="John" age={34}/>*/ //printing the names with using the props
