import React from 'react';
import './App.css';

function Myfun(){
    alert("HelloWorld")
}

function ShowData(prope){
    return <>
        <h1>ShowData Component</h1>
        <button onClick={prope.data}>Click Me..!</button>
    </>
}

function App(){
    return<>
    <h1>Welcome To My Webpage</h1>
    <ShowData data={Myfun}/>
    </>
}

export default App;