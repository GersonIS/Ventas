import Table from "./table/Table";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Season = () => {
    const table = ["Id","Temporada","Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/temporadas/";
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
                    <h1>Temporadas</h1>
                    <div className="col-12">
                        <button onClick={() => navigate('/temporadas/registro')} className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></button>
                    </div>
                    <Table datos={datos} table={table} type="Season" />
                </div>
            </div>
        </div >
    )
}

export default Season;