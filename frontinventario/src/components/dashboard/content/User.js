import Table from "./table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
    const table = ["Id", "Correo", "Celular", "Documento", "Username", "Foto", "Rol", "Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/usuarios/";
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

    return(
        < div className="container" >
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Usuarios</h1>
                    <div className="col-12">
                        <Link to='/usuarios/registro' className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></Link>
                    </div>
                    <Table datos={datos} table={table} type="usuarios" deleteOpcion={deleteOpcion} />
                </div>
            </div>
        </div >
    )
}

export default User;