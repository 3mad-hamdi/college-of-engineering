import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer bg- mb-0 pb-0">
      <div className="container mb-0 pt-5">
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-4">
            <h2 className="text-danger fs-3 mb-3 ">طرق التواصل </h2>
            <div className="links d-flex flex-column">
              <a href=" #" className="con-icon mt-2 link-footer">
                <i className="fa-solid fa-phone ms-1">:</i> +201558069958
              </a>
              <Link className="con-icon mt-2 link-footer">
                <i className="fa-solid fa-fax ms-1">:</i> 10000
              </Link>
              <a className="con-icon mt-2 link-footer" href="# ">
                <i className="fa-solid fa-location-dot ms-1">: </i> الاسكندرية -الشاطبي -شارع الكورنيش
              </a>
              <a className="con-icon mt-2 link-footer" href="# ">
                <i className="fa-solid fa-envelope ms-1">:</i>
                eng.admin@alex.edu.eg
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <hr className="text-light d-sm-block d-md-none d-lg-none" />

            <h2 className="text-danger fs-3 mb-3">روابط تهمك </h2>
            <div className="links d-flex flex-column">
              <a className="con-icon mt-2 link-footer" href="# ">
                <i className="fa-solid fa-chevron-left ms-1"></i>موقع الجامعة
                الرسمي
              </a>
              <a
                className="con-icon mt-2 link-footer"
                href="https://www.ekb.eg/"
                target=" _blank"
              >
                <i className="fa-solid fa-chevron-left ms-1"></i>بنك المعرفة
                المصري
              </a>
              <a
                className="con-icon mt-2 link-footer"
                href="https://scholar.google.com/"
                target=" _blank"
              >
                <i className="fa-solid fa-chevron-left ms-1"></i>جوجل الباحث
                العلمي
              </a>
              <Link className="con-icon mt-2 link-footer " to="/">
                <i className="fa-solid fa-chevron-left ms-1"></i> مركز تنمية
                اعضاء هيئة التدريس
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 flex-direction ">
            <hr className="text-light d-sm-block d-lg-none" />
            <img src="./images/logo-4.png" className="logo-brand" alt="" />
            <div className="social-media d-flex mt-3">
              <h5 className="text-dark text-center ps-2">تابعونا علي </h5>
              <a href="https://www.facebook.com/Integer.code" target=" _blank">
                <i className="con-icon fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.facebook.com/Integer.code" target=" _blank">
                <i className="con-icon fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/learnnigcode" target=" _blank">
                <i className="con-icon fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/eng_emad_serag" target=" _blank">
                <i className="con-icon fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center w-100 py-3">
          <hr className="text-light " />
          <h5 className="  fw-lighter fs-3 fs-5 text-dark">
            جميع حقوق النشر والتوزيع محفوظة
          </h5>
          <a
            href="https://aboukir-institutes.edu.eg"
            target=" _blank"
            className=" text-dang fs-5 fw-lighter mb-0 pb-0"
          >
            لدي كلية الهندسة  &copy;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
