import React, { useEffect, useState } from 'react'
import style from './homecrud.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Users from './Users'

const EditUsers = () => {
    let[name, setName] = useState("")
    let[salary, setSalary] = useState("")
    let[id, setId] = useState("")
    let[company, setCompany] =useState("")

    let {index} = useParams()
    let navigate = useNavigate()
    console.log({index})

    useEffect(
        ()=>{
            axios.get(`http://localhost:8000/user/${index}`)
            .then(res=>{
                console.log(res);
                setName(res.data.name)
                setSalary(res.data.salary)
                setCompany(res.data.company)
                setId(res.data.id)
            })
        },[index]
    )
    let handleData = async (e) =>{
        e.preventDefault()
        let payload = {name, salary, company, id}
        await axios.put(`http://localhost:8000/user/${index}`, payload)
        navigate("/user")
    }
  return (
    <div id={style.editbox}>
        <section className={style.form}>
            <h1>Edit {name}</h1>
            <br />
            <form onSubmit={handleData}>
                <label htmlFor="" id={style.empname}>Employee Name</label>  <br/>
                <input type="text" id={style.empname} value = {name} onChange={(e)=>{setName(e.target.value)}}/>
                <br/>
                <label htmlFor="" id={style.empname}>Employee Salary</label> <br/>
                <input type="text" id={style.empsalary} value = {salary} onChange={(e)=>{setSalary(e.target.value)}}/>
                <br/>
                <label htmlFor="" id={style.empid}>Employee Company</label> <br/>
                <input type="text" id={style.empid} value = {company} onChange={(e)=>{setCompany(e.target.value)}}/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </section>
        <Users/>
    </div>
  )
}

export default EditUsers