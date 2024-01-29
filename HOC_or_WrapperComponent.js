import React from 'react'
import './HOC_or_WrapperComponent.css'

function Counter() {
  const [count, setCount] = React.useState(0);
  return <>
    <h1>Count : {count}</h1>
    <button className="border border-black" onClick={() => setCount(count + 1)}>Update</button>
  </>
}

function HOC_red(props) {
  return <>
    <div className='bg-red-600 text-center text-xl w-24'>
      <props.counter />
    </div>
  </>
}

function HOC_green(props) {
  return <>
    <div className='bg-green-600 text-center text-xl w-24'>
      <props.counter />
    </div>
  </>
}

function HOC_blue(props) {
  return <>
    <div className='bg-blue-600 text-center text-xl w-24'>
      <props.counter />
    </div>
  </>
}

function HOC_or_WrapperComponent() {
  return (
    <>
      <HOC_red counter={Counter}/>
      <HOC_green counter={Counter}/>
      <HOC_blue counter={Counter}/>
    </>
  )
}

export default HOC_or_WrapperComponent