import React from "react";
import { Link } from "react-router-dom";

function Sections(props) {
  return (
    <div id="sections" className="sections mt-5">
      <div className="section-title">
        <h2 className="heading-title"> الأقسام العلمية </h2>
      </div>
      <div className="container">
        <div className="row g-3 ">
          {props.sectionsInfo.map((section, i) => (
            <div key={i} className="col-md-6 col-lg-4 col-xl-3 section-cards">
              <div className="card border-primary text-center">
                <img
                  src={section.illustrations}
                  className="card-img-top w-80"
                  alt="..."
                  title={section.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{section.title}</h5>
                  <p className="card-text overflow-hidden" style={{height:"50px"}}>{section.bio}</p>
                  <Link
                    to={`departments/${section.id}`}
                    className="btn btn-outline-primary text-dark fw-bold mt-3 mb-3"
                    title={section.title}
                  >
                    قراءة المزيد
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sections;
