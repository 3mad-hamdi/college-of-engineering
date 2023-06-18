import React ,{ createContext } from "react";
import Axios from "axios";
import { useEffect, useState } from "react";


export let departmentsContext=createContext(0)
export default function DepartmentsContextProvider(props){
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

	return <departmentsContext.Provider value={{dataAboutUs,dataDepartments,dataScores,dataDoctor,loading}}>
		{props.children}
	</departmentsContext.Provider>
}