import Table from "./table/Table";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Model = () => {
    const table = ["Id","Modelo","Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/modelos/";
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
                    <h1>Modelos</h1>
                    <div className="col-12">
                        <button onClick={() => navigate('/modelos/registro')} className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></button>
                    </div>
                    <Table datos={datos} table={table} type="Model" />
                </div>
            </div>
        </div >
    )
}

export default Model;