import React ,{useEffect} from 'react'
function ContactUs() {
	useEffect(()=>{
		window.scrollTo({
		  top: 0,
		  behavior: "smooth",
		});
	  },[])
  return (
	<div className="contant container mt-3">
	<div className="section-title">
	  <h2 className="heading-title"> تواصل معنا </h2>
	</div>
	<div className="row">
	  <div className="col-12 col-md-12 col-lg-6">
		<div className="mb-3">
		  <input
			type="email"
			className="form-control"
			placeholder="العنوان الالكتروني "
		  />
		</div>
		<div className="mb-3">
		  <textarea
			className="form-control"
			id="exampleFormControlTextarea1"
			rows="6"
			cols="10"
			placeholder="اكتب رسالتك "
		  ></textarea>
		</div>
		<button className="btn btn-outline-primary text-center mt-2 mb-5 col-12 w-50 m">
		<i className=" ms-2 fa-regular fa-paper-plane"></i>
		  إرسال
		</button>
	  </div>
	  <div className="col-12 col-md-12 col-lg-6 map">
		<iframe  className="w-100" title={'google-map'}
		  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.539221335043!2d29.922252275416515!3d31.20578706261731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c47e53204b39%3A0x884cc003f3633cf1!2sFaculty%20of%20Engineering%2C%20Alexandria%20University!5e0!3m2!1sen!2seg!4v1681564085434!5m2!1sen!2seg"></iframe>
	  </div>
	</div>
  </div>
  )
}

export default ContactUs