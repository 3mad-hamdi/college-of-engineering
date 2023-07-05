import React, { useContext, useEffect } from "react";
import { departmentsContext } from "../DataStore/Store";
function AboutUs() {
  let {dataAboutUs,dataDepartments}= useContext(departmentsContext)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
        <div className=" aboutus container text-dark mt-2">
      <div className="section-title">
        <h2 className="heading-title"> عن الكلية </h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 text-center pb-3">
          <img
            src={dataAboutUs.manger_img}
            
            id=""
            className="mb-3 w-50 img-doc"
            alt=""
          />
          <h2 className="fw-bold text-warning">
            {dataAboutUs.manger_work}
          </h2>
          <h5 className="fw-bold ">{dataAboutUs.manger_name}</h5>
          <p className="card-text">{dataAboutUs.your_words}</p>
        </div>
        <div className="text-center col-12 col-md-12 col-lg-6">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {dataDepartments.map((image, i) =>( 
                <div key={i} className={`carousel-item ${! i ? "active" : ""}`}>
                  <img src={image.img_bg} className="d-block w-100" alt="..." />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
