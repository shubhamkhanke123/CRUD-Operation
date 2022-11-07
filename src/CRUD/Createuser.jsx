import axios from 'axios'
import React, { useState } from 'react'
import style from './homecrud.module.css'
import { useNavigate } from 'react-router-dom'
const Createuser = () => {
  let [name, setName]=useState("")
  let [salary, setSalary]=useState("")
  let [id, setId]=useState("")

  const navigate = useNavigate()
  let handleData =async(e)=>{
    e.preventDefault()
    let payload = {name, salary, id}
    await axios.post("http://localhost:8000/user", payload)
    navigate("/user")
  }

  return (
    <section className={style.form}>

      <h1>Employee Details</h1>
      <br/>
      <form onSubmit={handleData}>
        <label htmlFor="" id={style.empname}>Employee Name</label>  <br/>
        <input type="text" id={style.empname} value = {name} onChange={(e)=>{setName(e.target.value)}}/>
        <br/>
        <label htmlFor="" id={style.empname}>Employee Salary</label> <br/>
        <input type="text" id={style.empsalary} value = {salary} onChange={(e)=>{setSalary(e.target.value)}}/>
        <br/>
        <label htmlFor="" id={style.empid}>Employee ID</label> <br/>
        <input type="text" id={style.empid} value = {id} onChange={(e)=>{setId(e.target.value)}}/>
        <br/>
        <input type="submit" value="Submit" />
      </form>

    </section>
  )
}

export default Createuser