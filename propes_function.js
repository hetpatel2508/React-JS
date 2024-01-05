import React from 'react';
import './App.css';

function Template_box(propes) {
  return <>
    <div className="name">Name : {propes.name}</div>
    <div className="email">Email : {propes.email}</div>
    <div className="m_num">Mobile Number : {propes.m_num}</div>
    <br /><br />
  </>
}

function App() {
    return( <div className="Main_box">
        <Template_box name="het" email="het@test.com" m_num="123"/>
        <Template_box name="urvish" email="urvish@test.com" m_num="456"/>
        <Template_box name="dev" email="dev@test.com" m_num="789"/>
        <Template_box name="deep" email="deep@test.com" m_num="101"/>
        <Template_box name="sahil" email="sahil@test.com" m_num="112"/>
    </div>)
}

export default App;