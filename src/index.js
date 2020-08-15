import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
    // this.setState((prevState) => ({count: prevState.count + 1}))
    // read current data in state (prevState)
    // can use callback
  }
  render() {
    if (this.state.count % 2 === 1) {
      return <h1>This is a book.</h1>
    }
    return <div>
      <p>{this.props.title}: {this.state.count}</p>
      <button onClick={this.onAdd}>add</button>
    </div>
   }
 }



function Car(props) {
  const isHonda = props.isHonda;
  const isToyota = props.isToyota;
  let car = null;
  if (isHonda) {
    car = <h1>Honda</h1>
  }
  if (isToyota) {
    car =  <h1>Toyota</h1>
  }
  if (!isToyota && !isHonda) {
    return null; //~ การบอกไม่ให้ render ออก มา html แต่ว่ายังอื่นยังทำงานปกติ จนกว่าจะส่ง props ที่ถูกต้องออกมาให้ render
  }
  return <div>
    <h1>This brand</h1>
    {car ? car : <span>No name</span>}
    {/* {car && <h1>Honda</h1>} */}
  </div> 
}

class ShowUl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      item: []
    };
  }
  onAdd = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }
  render() {
    const number = []
    for (let index = 0; index < this.state.count; index++) {
      number.push(<li>{index %2 === 1 ? 'even':'odd'}</li>)      
    }
    return <div>
      {/* <button onClick={this.onAdd}>add li</button> */}
      <button onClick={()=> this.setState({count: this.state.count +1})}>add li</button>
      <p>{this.state.count}</p>
      <ul>
        {number}
      </ul>
    </div>
   }
}

function Item(prop) {
  return <li>{prop.n} {prop.r}</li>
}
function ItemList({numbers}) {
  // const items = [];
  // for (let i = 0; i < props.numbers.length; i++) {
  //   items.push(<li>{i}</li>)
  // }
  return (<ul>{numbers.map(n => <Item key={n} n={n}>{n}</Item>)}</ul>)
}

class ItemEvent extends React.Component {
  state = {
    number: [1, 2, 3, 4, 5]
  }

  add = () => {
    this.setState({numbers: [...this.state.numbers, this.state.numbers.length +1]})
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}


class AddInput extends React.Component {
  state = {
    items: []
  };
  add = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      this.setState((prevState) => ({items: [...prevState.items, value]}))
      event.target.value = '';
    }
  }
  render() {
    return(
      <div>
 <      input onKeyUp={this.add}/>
        <ul>
          {this.state.items.map((v) => <li>{Number.isNaN(parseFloat(v))? 'not number': 'number'}</li>)}
        </ul>
      </div>
    )
  }
}
const numbers = [1, 2, 3, 4, 5]


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    }
    this.handlerClickEvent = this.handlerClick.bind(this)
  }
  //ถ้าจะใช้ arrow function จะ bind ให้เอง
  handlerClick() {
    this.setState((p) => ({isToggleOn: !p.isToggleOn}))
  }
  render() {
    return (
      <div>
        <button onClick={this.handlerClickEvent}>
          {this.state.isToggleOn? 'On': 'Off'}
        </button>
      </div>
    )
  }
}

class InputComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstName: '',
      lastName: ''
    }
  }
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name] : value})
    console.log(name);
  }
  onSummit = (event) => {
    event.preventDefault();
    const {firstName, lastName} = this.state;
    const name = `${firstName} ${lastName}`.trim()
    this.props.headleName(name)
    if (this.props.headleName) {
      this.props.headleName(name)
    }
  }
  render() {
    const {firstName, lastName} = this.state;
    const name = `${firstName} ${lastName}`.trim()
    const header = name ? <h1>Hello {name}</h1> :null
    return (
       <form onSubmit={this.onSummit}>
         {/* {header} */}
        {/* <input value={this.state.name} onChange={this.onChange}/> */}
          <input name="firstName" value={this.state.firstName} onChange={this.onChange}/>
          <input name="lastName" value={this.state.lastName} onChange={this.onChange}/>
          <button type="submit">submit</button>
       </form>
    )    
  }
}

class App extends React.Component{
  state = {
    name: ''
  }

  headleName = (name) => {
    this.setState({name})
  }

  render() {
    const name = `${this.state.name}`.trim()
    const header = name ? <h1>Hello {name}</h1> :null
    return (
      <React.Fragment>
        {header}
        <InputComp headleName={this.headleName}/>
      </React.Fragment>
    )
  }
}



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
