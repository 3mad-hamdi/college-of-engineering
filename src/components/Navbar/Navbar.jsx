import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  // icon.onclick(function() {
  //   console.log(icon);
  // })
  // const changeClass = () => {
  //   const icon = document.getElementById("nav-btn");
  //   // icon.classList.add('fa-bars');
  //   icon.classList.toggle("fa-gear");
  // };
  return (
    <nav className="navbar navbar-expand-lg w-100 sticky-top  ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            width="150px"
            className="logo-brand"
            src="./images/logo-4.png"
            alt=""
          />
        </Link>

     
          <i
            id="nav-btn"   type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
       
            className="border-0text-primary fa-solid fa-bars navbar-toggler"
          ></i>
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="aboutus">
                عن الكلية
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <Link
                className="nav-link"
                to=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الاقسام العلمية
                <i className="fa-solid fa-caret-down me-1"></i>
              </Link>
              <ul className="dropdown-menu text-center">
                {props.departmentsTitles.map((link, i) => (
                  <li key={i} className="nav-item-dropdown">
                    <Link
                      className="link"
                      to={`departments/${link.id}`}
                      title={`${link.title}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="doctors">
                أعضاء هيئة التدريس
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="contactus">
                تواصل معنا
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link login" href="http://127.0.0.1:8000" target=" _blank">
               المنصة التعلمية 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
