import React , {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { departmentsContext } from '../DataStore/Store';

function DoctorDetalis() {
  let {dataDoctor}= useContext(departmentsContext)

  let param = useParams()
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
  return (
	<div className='container mt-5 pt-5'>
    <div className="section-title" >
        <h3 className="heading-title">نظرة عن عضو هيئة تدريس </h3>
      </div>
      <div className='d-flex align-items-center justify-content-center flex-column'>
      <img src={dataDoctor[param.id].img } alt="" className='w-25 mb-3 rounded-circle'/>

<h2 className='mt-3 mb-3 fs-1'>{dataDoctor[param.id].name}</h2>
    </div>
    <div className="section-title">
    <h3 className="heading-title "> الدرجة العلمية </h3>
      </div>
  <ul>{dataDoctor[param.id].degree.map((item , i)=><li key={i} className='text-dark fs-4 pt-3' ><i className="fa-solid fa-angle-left text-primary"></i> {item} .</li>
  )}</ul>
      <div className="section-title">
    <h3 className="heading-title "> المواد الذي يدارسها  </h3>
      </div>
  <ul>{dataDoctor[param.id].sub.map((item , i)=><li key={i} className='text-dark fs-4 pt-3' ><i className="fa-solid fa-angle-left text-primary"></i> {item} .</li>
  )}</ul>
  
  </div>
  )
}
export default DoctorDetalis