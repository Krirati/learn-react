import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function WithoutJSX() {
  return React.createElement('h1', {alt:'test'}, 'Without JSX');
}

//ถ้าจะเขียนเกิo  1  บรรทัดจะต้องใส่อะไรครอบไว้ก่อน
//expression

//function compoenet
function HelloWold(props) { //({title}) จะสั้นชึ้น เอา title ออกมาเลย
  const {title} = props;
  return <div>
      <h1 alt={'test'}>With JSX {props.title}</h1>
    </div>
}


class HelloWoldComp extends React.Component {
   render() {
  //  return <h1>Hellow World class Component {this.props.title}</h1> // ตั้งแต่มี react.component จะมี props
    return <div>
      <HelloWold title="compoent int component"/>
      <HelloWold title="component in component"/>
    </div>
   }
 }

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <HelloWold title="Hello function"/>
    <HelloWoldComp title={`hello component`}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
