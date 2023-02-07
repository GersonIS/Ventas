import Table from "./table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Market = () => {
    const table = ["Id", "Tienda", "Codigo Postal", "Direccion", "Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/tiendas/";
    const data = async () => {
        const res = await axios.get(URL);
        setDatos(res.data);
    }

    const deleteOpcion = async (URL, id) => {
        await axios.delete(`${URL}${id}`);
        data();
    }

    useEffect(() => {
        data();
    }, [])

    return (
        < div className="container" >
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Tiendas</h1>
                    <div className="col-12">
                        <Link to='/tiendas/registro' className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></Link>
                    </div>
                    <Table datos={datos} table={table} type="tiendas" deleteOpcion={deleteOpcion} />
                </div>
            </div>
        </div >
    )
}

export default Market;