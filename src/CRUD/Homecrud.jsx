import React from 'react'
import style from './homecrud.module.css'
import {Link} from 'react-router-dom'
const Homecrud = () => {
  
  return (
    <div id={style.parentbox}>
      <ol id={style.nav}>
        <li>
          <Link to='/createuser'> Create User</Link>
        </li>
        <li>
          <Link to='/user'> Users</Link>
        </li>
        <li>
          <Link to='/theme'>Theme</Link>
        </li>
      </ol>
    </div>
  )
}

export default Homecrud