import Table from "./table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Model = () => {
    const table = ["Id", "Modelo", "Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/modelos/";
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
                    <h1>Modelos</h1>
                    <div className="col-12">
                        <Link to='/modelos/registro' className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></Link>
                    </div>
                    <Table datos={datos} table={table} type="modelos" deleteOpcion={deleteOpcion} />
                </div>
            </div>
        </div >
    )
}

export default Model;