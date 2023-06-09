import React, { useContext } from "react";
import { departmentsContext } from "../DataStore/Store";
function Scores() {
  let {dataScores}= useContext(departmentsContext)

  return (
    <div className="scores d-flex align-items-center mt-5">
      <div className="container">
        <div className="row">
          {dataScores.map((score, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3 mb-3 mt-3">
              <div className="text-center">
                <i className={`${score.scores_icon}`}></i>
                <h5 className="fs-3 mt-2">+{score.scores}</h5>
                <p className="fs-2">{score.scores_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scores;
