import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './homecrud.module.css'

const Users = () => {
  let[state, setState]=useState([])
  let[text, setText]=useState("Edit User")
  useEffect(()=>{
    axios.get("http://localhost:8000/user")
    .then((res)=>{
      console.log(res);
      setState(res.data)
      
    })
  },[])

  let deleteData =(index)=>{
    axios.delete(`http://localhost:8000/user/${index}`)
    document.location.reload()
  }

  let changeText = ()=>{
    setText("Editing")
  }
 
  return (
    <div id={style.user}>
      {state.map(
        (x)=>{
          return(
            <section >
              <div id={style.box}>
              <h1 id={style.title}>{x.name}</h1>
              <table>
                <tbody>
                  <tr>
                    <td><h1>Name:</h1></td>
                    <td><h1> {x.name} </h1></td>
                  </tr>
                  <tr>
                    <td><h1>Salary:</h1></td>
                    <td><h1> {x.salary} </h1></td>
                  </tr>
                  <tr>
                    <td><h1>ID:</h1></td>
                    <td><h1> {x.id} </h1></td>
                  </tr>
                  <tr>
                    <td><h1>Company:</h1></td>
                    <td><h1> {x.company} </h1></td>
                  </tr>
                </tbody>
              </table>
              <br />
              <button onClick={changeText}>
              <Link  to={`/edit/${x.id}`} id={style.link} >{text}</Link>
              </button>
              
              <button onClick={()=>{deleteData(x.id)}}>Delete User</button>
              </div>
            </section>
          )
        }
      )}
    </div>
  )
}

export default Users