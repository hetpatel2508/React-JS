import React from 'react';
import './App.css';

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      Data:0
    }
  }

  plus=()=>{
    this.setState({Data: this.state.Data+1});
  }
  
  minus=()=>{
    if(this.state.Data===0){return}
    this.setState({Data: this.state.Data-1});    
  }

  render(){
    return (
    <>
    <h1>items: {this.state.Data}</h1>
    <button onClick={this.plus}>+</button>
    <button onClick={this.minus}>-</button>
    </>
    );
  }
}

export default App;