import React, { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { departmentsContext } from '../DataStore/Store';


function SliderHome() {
	let {dataDepartments}= useContext(departmentsContext)

  return (
	 <Carousel className='slider-height'>
	{dataDepartments.map((slider, i) => (
		<Carousel.Item key={i}>
		<img
		  className="d-block w-100 img-slider"
		  src={slider.img_bg}
		  alt="First slide"/>
		<Carousel.Caption className='mb-5 pb-5'>
		  <Link to={`departments/${slider.id}`}><h3 className=' mb-5'>{slider.title}</h3></Link>
		  <p>{slider.bio}</p>
		</Carousel.Caption>
	  </Carousel.Item>
	))}
  </Carousel>
  )
}
export default SliderHome