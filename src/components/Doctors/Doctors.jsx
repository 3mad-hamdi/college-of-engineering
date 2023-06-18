import React ,{useEffect}from "react";
function Doctors(props) {
  useEffect (()=>{
		window.scrollTo({
			top:0,
			behavior: "smooth"
		}
		)
	},[])
  return (<> 
      <div className="container mt-5">
      <div className="section-title">
        <h3 className="heading-title">أعضاء هيئة التدريس </h3>
      </div>
      <div className="row g-3 mb-5">
        {props.doctorInfo.map((doctor, i) =><div key={i} className="col-md-6 col-lg-4 col-xl-3">
            <div className="card">
            <img
                  src={doctor.img}
                  className="mb-3 card-img-top"
                  alt=""
                />
              <div className="card-body text-center">
                
                <h4 className="card-title "> {doctor.name}</h4>
                {/* <p className="card-text">{doctor.bio}</p> */}
                
                {/* {doctor.sub? <Link to={`${doctor.id}`} className="btn btn-outline-primary text-dark fw-bold" title={doctor.title}>قراءة المزيد</Link> :""} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  );
}

export default Doctors;
