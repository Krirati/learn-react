import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//function compoenet
function HelloWold(props) { //({title}) จะสั้นชึ้น เอา title ออกมาเลย
  // const {title} = props;
  return <div>
      <h1 alt={'test'}>With JSX {props.title}</h1>
    </div>
}


class HelloWoldComp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: 'x',
      etx: ''
    };
  }

  onAdd = () => {
    // this.setState({
    //   count: this.state.count + 1,
    //   title: 'xxx',
    //   etx: '2'
    // })
    this.setState((prevState) => ({count: prevState.count + 1}))
    this.setState((prevState) => ({count: prevState.count + 1}))
    // read current data in state (prevState)
    // can use callback
  }
  

  render() {
    return <div>
      <p>{this.props.title}: {this.state.count}</p>
      <button onClick={this.onAdd}>add</button>
    </div>
   }
 }

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <HelloWoldComp title="Component"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
