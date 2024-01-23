import React from 'react';
import './Ref_method_in_class.css';

class Ref_method_in_class extends React.Component{
  
  constructor(){
    super();
    this.tempRef_1=React.createRef();
    this.tempRef_2=React.createRef();
  }
  
  render(){
    return(
      <>
      <div style={{display:"flex"}}>
        <div ref={this.tempRef_1} style={{width:"150px", margin:"60px" , height:"150px" , backgroundColor:"lightslategray" ,textAlign:"center"}}>box1</div>
        <div ref={this.tempRef_2} style={{width:"150px", margin:"60px" , height:"150px" , backgroundColor:"lightseagreen" ,textAlign:"center"}}>box1</div>
      </div>
      <br />
      <button onClick={()=>this.tempRef_1.current.style.backgroundColor="darkblue"}>Update Box1</button><br />
      <button onClick={()=>this.tempRef_2.current.style.backgroundColor="darkred"}>Update Box2</button><br />
      </>
    )
  }
}

export default Ref_method_in_class;