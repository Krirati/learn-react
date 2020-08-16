import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('adds 1+1 to equal 2', () => {
  expect(1+1).toBe(2)
})

test('adds 1 +1 != 3', () => {
  expect(1+1).not.toBe(3);
})

// toBe is === (==,===)
// 2 == '2'true
// 2 === '2' false
// toBe can not compare json
// {a: 'a'} == {a: 'a'} false

// toEqual is

test('oject', () => {
  const data = {a: 'a', b: 'b'}
  //expect(data).toBe({a:'a', b: 'b'}) //false
  // expect(data).toBe(data)
  expect(data).toEqual(( {a: 'a', b: 'b'}))
})

// Truthiness
// if null || zero || undefined   is false
test('null', () => {
  const n = null;
  expect(n).toBe(null)
  expect(n).toBeNull()
  expect(n).toBeFalsy()
  expect(n).not.toBeTruthy()
})

test('zero', ()=> {
  const z = 0
  expect(z).not.toBeNull();
  expect(z).not.toBeUndefined()
  expect(z).toBeFalsy()
  expect(z).not.toBeTruthy()
})

test('undefined', () => {
  const u = undefined
  expect(u).not.toBeNull()
  expect(u).toBeUndefined()
  expect(u).toBeFalsy()
})

test('number', () => {
  const value = 1 + 1
  expect(value).toBe(2)
  expect(value).toBeGreaterThan(1)
  expect(value).toBeGreaterThanOrEqual(2)

  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(2)
})

test('floating point number', ()=> {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3)
  // '0.3' === '0.3
  expect(value).toBeCloseTo(0.3)
})

test('string', () => {
  const value = 'test1'
  expect(value).toEqual('test1')
  expect(value).toEqual('test1')
  expect(value).toContain('test1')
  expect(value).toMatch('test1')
  expect(value).not.toMatch(/eiei/)
})

test('Array', () => {
  const v = [1,2,3,4,5,]
  expect(v).toContain(2);
  expect(new Set(v)).toContain(3)
})

function throwErrorNa() {
  throw new Error('This is Error')
}

test('exception', () => {
  expect(throwErrorNa).toThrow()
  // expect(() => throwErrorNa()).toThrow()

  // expect(throwErrorNa).toThrow('This is throw')
  // expect(throwErrorNa).toThrow(/error/)
})

//testing libary
class App extends React.Component{
  state = {
    search: ''
  }
  render() {
    return (<div>
      Search: <input type="text"></input>
    </div>)
  }
}

test('render app componet', () => {
  render(<App />)
  screen.debug()
  expect(screen.getByText('Search:')).toBeInTheDocument()
  expect(screen.getByText(/Search/)).toBeInTheDocument()
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})