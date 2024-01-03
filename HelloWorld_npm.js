import React from 'react';
import logo from './logo.svg';
import './App.css';

function Temp() {
  const t = () => { alert("I am Using React") }
  return <button onClick={t}>Click Me...!</button>
}

class HelloWorld extends React.Component {
  render() {
    return(
    <div>
      <h1>Hello World...!</h1>
      <Temp />
    </div>);
  }
}

export default HelloWorld;