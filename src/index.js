import React, { useState, useEffect, useContext, useReducer, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';


// //function compoenet
// function HelloWold(props) { //({title}) จะสั้นชึ้น เอา title ออกมาเลย
//   // const {title} = props;
//   return <div>
//       <h1 alt={'test'}>With JSX {props.title}</h1>
//     </div>
// }


// class HelloWoldComp extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       title: 'x',
//       etx: ''
//     };
//   }

//   onAdd = () => {
//     // this.setState({
//     //   count: this.state.count + 1,
//     //   title: 'xxx',
//     //   etx: '2'
//     // })
//     this.setState((prevState) => ({count: prevState.count + 1}))
//     // this.setState((prevState) => ({count: prevState.count + 1}))
//     // read current data in state (prevState)
//     // can use callback
//   }
//   render() {
//     if (this.state.count % 2 === 1) {
//       return <h1>This is a book.</h1>
//     }
//     return <div>
//       <p>{this.props.title}: {this.state.count}</p>
//       <button onClick={this.onAdd}>add</button>
//     </div>
//    }
//  }



// function Car(props) {
//   const isHonda = props.isHonda;
//   const isToyota = props.isToyota;
//   let car = null;
//   if (isHonda) {
//     car = <h1>Honda</h1>
//   }
//   if (isToyota) {
//     car =  <h1>Toyota</h1>
//   }
//   if (!isToyota && !isHonda) {
//     return null; //~ การบอกไม่ให้ render ออก มา html แต่ว่ายังอื่นยังทำงานปกติ จนกว่าจะส่ง props ที่ถูกต้องออกมาให้ render
//   }
//   return <div>
//     <h1>This brand</h1>
//     {car ? car : <span>No name</span>}
//     {/* {car && <h1>Honda</h1>} */}
//   </div> 
// }

// class ShowUl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       item: []
//     };
//   }
//   onAdd = () => {
//     this.setState((prevState) => ({count: prevState.count + 1}))
//   }
//   render() {
//     const number = []
//     for (let index = 0; index < this.state.count; index++) {
//       number.push(<li>{index %2 === 1 ? 'even':'odd'}</li>)      
//     }
//     return <div>
//       {/* <button onClick={this.onAdd}>add li</button> */}
//       <button onClick={()=> this.setState({count: this.state.count +1})}>add li</button>
//       <p>{this.state.count}</p>
//       <ul>
//         {number}
//       </ul>
//     </div>
//    }
// }

// function Item(prop) {
//   return <li>{prop.n} {prop.r}</li>
// }
// function ItemList({numbers}) {
//   // const items = [];
//   // for (let i = 0; i < props.numbers.length; i++) {
//   //   items.push(<li>{i}</li>)
//   // }
//   return (<ul>{numbers.map(n => <Item key={n} n={n}>{n}</Item>)}</ul>)
// }

// class ItemEvent extends React.Component {
//   state = {
//     number: [1, 2, 3, 4, 5]
//   }

//   add = () => {
//     this.setState({numbers: [...this.state.numbers, this.state.numbers.length +1]})
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.add}>Add</button>
//       </div>
//     )
//   }
// }


// class AddInput extends React.Component {
//   state = {
//     items: []
//   };
//   add = (event) => {
//     if (event.key === 'Enter') {
//       const value = event.target.value;
//       this.setState((prevState) => ({items: [...prevState.items, value]}))
//       event.target.value = '';
//     }
//   }
//   render() {
//     return(
//       <div>
//  <      input onKeyUp={this.add}/>
//         <ul>
//           {this.state.items.map((v) => <li>{Number.isNaN(parseFloat(v))? 'not number': 'number'}</li>)}
//         </ul>
//       </div>
//     )
//   }
// }
// const numbers = [1, 2, 3, 4, 5]


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggleOn: false,
//     }
//     this.handlerClickEvent = this.handlerClick.bind(this)
//   }
//   //ถ้าจะใช้ arrow function จะ bind ให้เอง
//   handlerClick() {
//     this.setState((p) => ({isToggleOn: !p.isToggleOn}))
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handlerClickEvent}>
//           {this.state.isToggleOn? 'On': 'Off'}
//         </button>
//       </div>
//     )
//   }
// }

// class InputComp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       firstName: '',
//       lastName: ''
//     }
//   }
//   onChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({ [name] : value})
//     console.log(name);
//   }
//   onSummit = (event) => {
//     event.preventDefault();
//     const {firstName, lastName} = this.state;
//     const name = `${firstName} ${lastName}`.trim()
//     this.props.headleName(name)
//     if (this.props.headleName) {
//       this.props.headleName(name)
//     }
//   }
//   render() {
//     const {firstName, lastName} = this.state;
//     const name = `${firstName} ${lastName}`.trim()
//     const header = name ? <h1>Hello {name}</h1> :null
//     return (
//        <form onSubmit={this.onSummit}>
//          {/* {header} */}
//         {/* <input value={this.state.name} onChange={this.onChange}/> */}
//           <input name="firstName" value={this.state.firstName} onChange={this.onChange}/>
//           <input name="lastName" value={this.state.lastName} onChange={this.onChange}/>
//           <button type="submit">submit</button>
//        </form>
//     )    
//   }
// }

// class LifeCycle extends React.Component{
//   constructor(props) {
//     super(props)
//     console.log('constructor');
//     this.state = {
//       name: 'name'
//     }
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStaetFromProps');
//     console.log(props, state)
//     return {
//       name: props.count %2 ==0 ? "even": "odd"
//     }
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.count > 5) {
//       return false
//     }
//     return true
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     return {
//       count: prevProps.count
//     }
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot);
//   }
//   componentWillUnmount() {
//     console.log('unmount');
//   }
//   render() {
//     return (<div>{this.state.name}</div>)
//   }
// }

// class App extends React.Component{
//   state = {
//     name: '',
//     count: 0
//   }

//   headleName = (name) => {
//     this.setState({name})
//   }
//   add = () => {
//     // this.setState({count: [...this.state.numbers, this.state.numbers.length +1]})
//   }
//   render() {
//     // const name = `${this.state.name}`.trim()
//     // const header = name ? <h1>Hello {name}</h1> :null
//     return (
//       // <React.Fragment>
//       //   {header}
//       //   <InputComp headleName={this.headleName}/>
//       // </React.Fragment> 
//       // <> is short syntex
//       <>
//         <button onClick={()=> this.setState({count: this.state.count +1})}>Add</button>
//         <LifeCycle/>
//       </>
//     )
//   }
// }

// ==================== Day 2 ============================================================

// function ComponentExample(props) {
//   console.log(props);
//   return props.children
// }
// function Composition() {
//   const isEven = parseInt(Math.random() * 10, 10) %2 === 0
//   const element = isEven ? <h2>Hello Even</h2> : <span>Odd</span>
//   return (
//     <>
//     <h1>{element}</h1>
//     <ComponentExample title={'Hellow World h2'}>
//       {element}
//     </ComponentExample>
//       <h3>Hellow World h3</h3>

//     </>
//   )
// }


//context API
const ColorContext = React.createContext({})
const FontSize = React.createContext({})

class Todo extends React.Component {
  // static contextType = ColorContext
  render() {
    // return <p style={{color: this.context.color}}>{this.props.title}</p>
    return (
      <ColorContext.Consumer>
        {({ color }) => (
          <FontSize.Consumer>
            {({ fontSize }) => (
              <p style={{ color: color, fontSize: fontSize + 'px' }}>{this.props.title}</p>
            )}
          </FontSize.Consumer>
        )}
      </ColorContext.Consumer>
    )
  }
}
// ไม่ทัน comsumer
function ToggleTodoButton() {
  return (
    <ColorContext.Consumer>
      {(context) => {
        return <button onClick={context.toggleColor}>{context.color}</button>
      }}
    </ColorContext.Consumer>
  )
}

function TodoList({ color }) {
  return (
    <div>
      <Todo title={'Todo1'} color={color} />
      <Todo title={'Todo2'} color={color} />
      <ToggleTodoButton />
    </div>
  )
}

class App extends React.Component {
  state = {
    color: 'pink',
    fontSize: 17,
    toggleColor: () => {
      this.setState(({ color }) => ({ color: color === 'pink' ? 'green' : 'pink' }))
    },
    count: 0
  }
  render() {
    const { color, fontSize, toggleColor } = this.state
    if (this.state.count > 5) {
      throw (ErrorBoundaries)
    }
    return (
      <ColorContext.Provider value={{ color, toggleColor }}>
        <FontSize.Provider value={{ fontSize }}>
          <TodoList />
          {this.state.count > 5 ? null : <Example />}
          <button onClick={() => this.setState(() => this.state.count + 1)}>Click app</button>
        </FontSize.Provider>
      </ColorContext.Provider>
    )
  }
}

class AppX extends React.Component {

}
class ErrorBoundaries extends React.Component {
  state = {
    isError: false,
  }
  static getDerivedStateFromError(error) {
    return {
      isError: true
    }
  }
  render() {
    return (
      this.state.isError ? <div>Something Wrong</div> : <div>{this.props.children}</div>
    )
  }
}
// class App2 extends React.Component{
//   render() {
//     return (
//       <ErrorBoundaries>
//         <AppX></AppX>
//       </ErrorBoundaries>
//     )
//   }
// }

//แบบ 

// function Hello() {
//   return <h1>Hello World!</h1>
// }
// const withLoadingComponent = (WrappedComponent) => {
//   return class ComponentLoading extends React.Component {
//     render() {
//       if (this.props.isLoading) {
//         return <div>Loading</div>
//       }
//       return <WrappedComponent/>
//     }
//   }
// }

// const LoadingCompoent = withLoadingComponent(Hello)

// function Hello() {
//   return (
//     <h1>Hello World!</h1>
//   )
// }
// const withHello = (WrappedComponent) => {
//   return class InpurComponent extends React.Component {
//     state = {
//       text: ''
//     }
//     onChange = (event) => {
//       const text = event.target.value
//       this.setState({ text })
//     }
//     render() {
//       return (
//         <div>
//           <WrappedComponent />
//           <p>{this.state.text}</p>
//           <input onChange={this.onChange} value={this.state.text}></input>
//         </div>
//       )
//     }
//   }
// }
// const HelloCompoent = withHello(Hello)

// function ComponentInput(props) {
//   return <h2>{props.children}</h2>
// }

// class CompositionHello extends React.Component {
//   state = {
//     text: ''
//   }
//   onChange = (event) => {
//     const text = event.target.value
//     this.setState({ text })
//   }
//   render() {
//     return (
//       <>
//         <h1>Hello World</h1>
//         <ComponentInput>
//           {this.state.text}
//         </ComponentInput>
//         <input onKeyUp={this.onChange}></input>
//       </>
//     )
//   }
// }
function useCountName(count, title) {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(title + ' ' + count)
  }, [count, title])
  return name
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state
  }
}

function Example(props) {
  const [count, dispatchCount] = useReducer(reducer, 0)
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([])
  const [enter, setEnter] = useState(false)
  const { color } = useContext(ColorContext)
  const fontContext = useContext(FontSize)

  // const name = useCountName(count, title)
  // const name = useMemo(() => title + ' ' + count, [title, count])
  const name = useCallback((a) => title + ' ' + count + a, [title, count])
  useEffect(() => {
    console.log("This is effect");

  }, [])

  useEffect(() => {
    console.log('This is effect 2');
    const inteval = setInterval(() => {
      console.log('xx');
    }, 2000)
    return () => {
      console.log('xxx');
      clearInterval(inteval)
    }
  }, [])
  
  return (
    <div>
      {/* <p style={{ color }}>{name(1)}</p>
      <p style={{ fontSize: fontContext }}>Title is {title}</p>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <p style={{ fontSize: '20px' }}>{count}</p>
      <button onClick={() => dispatchCount({ type: 'increment' })}>Click</button>
      <button onClick={() => dispatchCount({ type: 'decrement' })}>Decrement</button> */}
      <input value={title} onChange={(event) => setTitle(event.target.value)} onKeyUp={() => setEnter(true)}/>
    </div>
  )
}
function TodoX() {
  const [todo, setTodo] = useState([])
  const onChange = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value
      setTodo([...todo, value])
      event.target.value = ''
    }
  }
  return (
    <div>
      <input onKeyUp={onChange}/>
      <ul>
        {todo.map((todo) => <li>{todo}</li>)}
      </ul>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    {/* <HelloCompoent/>
    <CompositionHello/> */}
    <Example title={'Hello'} />
    <TodoX/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
