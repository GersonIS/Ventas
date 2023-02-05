import Table from "./table/Table";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Gender = () => {
    const table = ["Id","Genero","Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/generos/";
    const navigate = useNavigate();
    const data = async () => {
        const res = await axios.get(URL);
        setDatos(res.data);
    }

    useEffect(() => {
        data();
    }, [])

    return(
        < div className="container" >
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Generos</h1>
                    <div className="col-12">
                        <button onClick={() => navigate('/generos/registro')} className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></button>
                    </div>
                    <Table datos={datos} table={table} type="Gender" />
                </div>
            </div>
        </div >
    )
}

export default Gender;