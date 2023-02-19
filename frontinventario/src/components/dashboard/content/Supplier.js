import Table from "./table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Supplier = () => {
    const table = ["Id", "Correo", "Celular", "Documento", "Empresa", "Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/proveedores/";
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
                    <h1>Proveedores</h1>
                    <div className="col-12">
                        <Link to='/proveedores/registro' className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></Link>
                    </div>
                    <Table datos={datos} table={table} type="proveedores" deleteOpcion={deleteOpcion} />
                </div>
            </div>
        </div >
    )
}

export default Supplier;