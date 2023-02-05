import Table from "./table/Table";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Market = () => {
    const table = ["Id","Tienda","Codigo Postal","Direccion","Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/tiendas/";
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
                    <h1>Tiendas</h1>
                    <div className="col-12">
                        <button onClick={() => navigate('/tiendas/registro')} className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></button>
                    </div>
                    <Table datos={datos} table={table} type="Market" />
                </div>
            </div>
        </div >
    )
}

export default Market;