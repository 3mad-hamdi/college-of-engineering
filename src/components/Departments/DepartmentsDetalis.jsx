import React, { useContext } from 'react'
import { useEffect } from "react";
// import axios from "axios";

import { useParams } from 'react-router-dom'
import { departmentsContext } from '../DataStore/Store';
function DepartmentsDetalis() {
	let {dataDepartments}= useContext(departmentsContext)

	useEffect (()=>{
		window.scrollTo({
			top:0,
			behavior: "smooth"
		}
		)
	},[])
	let params= useParams();
  return ( <div className="mt-5">
  <img src={dataDepartments[params.id].img_bg} height='400px' className="w-100 rounded" alt="" />
  <div className="section-title mt-5">
	<h2 className="heading-title">{dataDepartments[params.id].title}</h2>
  </div>
  <div className="content">
	<div className="section-title">
	  <h3 className="heading-title"> تفاصيل القسم </h3>
	</div>
	<p className="">{dataDepartments[params.id].details} </p>
  </div>
  <div className="content">
	<div className="section-title">
	  <h3 className="heading-title">المواد الدراسية </h3>
	</div>
	<p className="">{dataDepartments[params.id].subjects}</p>
  </div>
  <div className="content">
	<div className="section-title">
	  <h3 className="heading-title">أعضاء هيئة التدريس </h3>
	</div>
	<div className="row  mb-5">
	{dataDepartments[params.id].doctor.map((doctor ,i)=><div key={i} className="col-12 col-md-6 col-lg-4">
		<div className="card">
		  <div className="card-body text-center">
			<img src={doctor.img} className="w-75 mb-3 rounded-circle" alt="" />
			<h4 className="card-title "> {doctor.name}</h4>
			<p className="card-text">{doctor.bio}
			</p>
		  </div>
		</div>
	  </div>)}
	</div>
  </div>
</div>

  )
}

export default DepartmentsDetalis