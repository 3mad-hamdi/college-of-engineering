import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Departments(props) {
  return (
	<div className='departments container mt-5 '>
    <div className="row">
        <ul className="col-12 d-flex flex-wrap">
       {props.departmentsInfo.map((title ,i)=>(
           <li key={i} className='col-lg-4 col-md-6 col-sm-6 text-dark mt-3 g-5 ps-2 d-flex'>
           <NavLink className='btn btn-outline-primary text-dark' to={`${title.id}`}>{title.title}</NavLink>
         </li>
       ))}
        </ul>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  </div>
  )
}

export default Departments