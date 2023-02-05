import Table from "./table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {
    const table = ["Id", "Categoria", "Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/categorias/";
    const data = async () => {
        const res = await axios.get(URL);
        setDatos(res.data);
    }

    useEffect(() => {
        data();
    }, [])

    return (
        < div className="container" >
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Categorias</h1>
                    <div className="col-12">
                        <Link to='/categorias/registro' className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></Link>
                    </div>
                    <Table datos={datos} table={table} type="Category" />
                </div>
            </div>
        </div >
    )
}

export default Category;