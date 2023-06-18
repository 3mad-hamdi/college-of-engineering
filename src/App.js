import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFoundPage/NotFound";
import Axios from "axios";

import ContactUs from './components/ContactUs/ContactUs';
import Doctors from "./components/Doctors/Doctors";
import Loading from './components/Loading/Loading';
import DepartmentsDetalis from './components/Departments/DepartmentsDetalis';
import DoctorDetalis from './components/Doctors/DoctorDetalis';
import AOS from "aos";
import 'aos/dist/aos.css'

function App() {
    const [dataAboutUs, setDataAboutUs] = useState([])
    const [dataDepartments, setDataDepartments] = useState([])
    const [dataScores, setDataScores] = useState([])
    const [dataDoctor, setDataDoctor] = useState([])
    const [loading, setLoading] = useState(false);

    async function getData() {
        let { data } = await Axios.get(`./data/data.json`);

        setDataAboutUs(data.about_us)
        setDataDepartments(data.departments)
        setDataScores(data.scores)
        setDataDoctor(data.doctor)

    }
    useEffect(() => {
        getData()
        scrollTop()
        AOS.init();
        function scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    return (
        loading ? <Loading /> :
        <>
           <Navbar departmentsTitles={dataDepartments} />
            <Routes>
                <Route path="/" element={<Home departmentsInfo={dataDepartments} aboutData={dataAboutUs} scoresData={dataScores} />} />
                <Route path="aboutus" element={<AboutUs aboutData={dataAboutUs} departmentsInfo={dataDepartments} />} />
                <Route path="departments" element={<Departments departmentsInfo={dataDepartments} />}>
                    <Route path=":id" element={<DepartmentsDetalis departmentsInfo={dataDepartments} />} />
                </Route>
                <Route path="doctors" element={<Doctors doctorInfo={dataDoctor} />} />
                <Route path="doctors" element={<DoctorDetalis doctorInfo={dataDoctor} />} >
                    <Route path=":id" element={<DoctorDetalis doctorInfo={dataDoctor} />} />
                </Route>
                <Route path="contactus" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
                <Route path="lo" element={<Loading />} />
            </Routes>
            <Footer /> 
            </>



    )
}

export default App;