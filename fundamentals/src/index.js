import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let modal={clicks:0};
function render(){
  ReactDOM.render(<App 
                       clicks={modal.clicks} 
                       onClick={()=>{modal.clicks += 1; render();}}/>,document.getElementById('root'));
}
render();
serviceWorker.register();
