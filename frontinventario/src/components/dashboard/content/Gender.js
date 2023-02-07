import Table from "./table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Gender = () => {
    const table = ["Id", "Genero", "Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/generos/";
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
                    <h1>Generos</h1>
                    <div className="col-12">
                        <Link to='/generos/registro' className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></Link>
                    </div>
                    <Table datos={datos} table={table} type="generos" deleteOpcion={deleteOpcion} />
                </div>
            </div>
        </div >
    )
}

export default Gender;