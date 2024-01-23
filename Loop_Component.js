import React from 'react';
import './Loop_Component.css';

function Template(props){
  return(
    <>
        <div style={{borderStyle:"solid", borderRadius:"30px" , borderWidth:"solid" ,width:"40%", backgroundColor:"lightgrey", display:"flex" , flexDirection:"column"}}>
            <div>
                <h1>Id:  {props.data.id}</h1>
            </div>
            <div>
                <h1>Name:  {props.data.name}</h1>
            </div>
        </div>
        <br />
    </>
  )
}

function Loop_Component() {

  const student =[
    {id:1,name:"het"},
    {id:2,name:"urvish"},
    {id:3,name:"dev"},
    {id:4,name:"deep"},
    {id:5,name:"sahil"},
    {id:6,name:"daksh"}
  ]

  return (
    <>
      <center><h1>Student Details</h1></center>
      {
        student.map((item , index)=>(
          <Template key={index} data={item}/>
        ))
      }
    </>
  )

}

export default Loop_Component;