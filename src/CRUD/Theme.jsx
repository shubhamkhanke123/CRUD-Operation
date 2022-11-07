import React from 'react'

const Theme = () => {
    let space = ()=>{
        document.getElementsByName('button').style.backgroundColor = "red"
    }
  return (
    <div>
        <h1>Main : </h1>
        <button onClick={space}>space</button>
        <button className='button'><pre>  </pre></button>
        <button className='button'><pre>  </pre></button>
        <button className='button'><pre>  </pre></button>
        <button className='button'><pre>  </pre></button>

    </div>
  )
}

export default Theme