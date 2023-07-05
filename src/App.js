import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFoundPage/NotFound";
import ContactUs from './components/ContactUs/ContactUs';
import Doctors from "./components/Doctors/Doctors";
import Loading from './components/Loading/Loading';
import DepartmentsDetalis from './components/Departments/DepartmentsDetalis';
import DoctorDetalis from './components/Doctors/DoctorDetalis';
import 'aos/dist/aos.css'
import { departmentsContext } from "./components/DataStore/Store";

function App() {
    let {loading}= useContext(departmentsContext)


    return (
        loading ? <Loading /> :
        <>
           <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="aboutus" element={<AboutUs  />} />
                <Route path="departments" element={<Departments />}>
                    <Route path=":id" element={<DepartmentsDetalis  />} />
                </Route>
                <Route path="doctors" element={<Doctors  />} />
                <Route path="doctors" element={<DoctorDetalis/>} >
                    <Route path=":id" element={<DoctorDetalis/>} />
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