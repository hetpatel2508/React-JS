import React from 'react';
import './App.css';

class Template_box extends React.Component {
  render() {
    return (
      <>
        <h4>Name : {this.props.name}</h4>
        <h4>Email : {this.props.email}</h4>
        <h4>m_num : {this.props.m_num}</h4>
        <br />
      </>
    )
  }
}

class App extends React.Component {
  render() {
    return (<>
      <Template_box name="het" email="het@test.com" m_num="123"/>
      <Template_box name="urvish" email="urvish@test.com" m_num="456"/>
      <Template_box name="dev" email="dev@test.com" m_num="789"/>
      <Template_box name="deep" email="deep@test.com" m_num="101"/>
    </>
    )
  }
}

export default App;