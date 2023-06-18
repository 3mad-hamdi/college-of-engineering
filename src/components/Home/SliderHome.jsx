import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function SliderHome(props) {
  return (
	 <Carousel className='slider-height'>
	{props.sectionsInfo.map((slider, i) => (
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