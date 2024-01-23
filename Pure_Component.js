import React from 'react';
import './Pure_Component.css';

class Pure_Component extends React.PureComponent{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  
  render(){
    console.warn("PureComponent is Rendered...!")
    return <>
      <h1>Count = {this.state.count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>      
      <button onClick={()=>{this.setState({count:this.state.count-1})}}>-</button>      
    </>
  }
}

export default Pure_Component;