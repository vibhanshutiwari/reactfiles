import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Prop, Newstore,Dest, ParentComponent} from './props';
import {Main, Hello, Car, Other} from './states';
import {Football, Mainball} from './events';
import {Myform, Submitfrom, Mutipleinput} from './form';
import App from './setstate';
import Forces from './ComponentAPI';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hello favour='pink' />
    <Car />
    <Prop name= 'shubham' village = 'kaleniya' />
    <Newstore name = 'shubham' last = 'tiwari' />
    <Dest laptop ='HP' phone ='honor' />
    <ParentComponent />
    <Main />
    <Football />
    <Mainball />
    <Myform />
    <Submitfrom />
    <Mutipleinput />
    <Other />
    <Forces />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
