import Table from "./table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
    //codigo, producto, descripcion, ruta1, ruta2, ruta3, ruta4, categoriaId, empleadoId
    const table = ["Id", "Codigo", "Producto", "Descripcion", "Opciones"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/productos/";
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
                    <h1>Productos</h1>
                    <div className="col-12">
                        <Link to='/productos/registro' className="btn btn-primary rounded"><i className="fas fa-plus-circle"></i></Link>
                    </div>
                    <Table datos={datos} table={table} type="productos" deleteOpcion={deleteOpcion} />
                </div>
            </div>
        </div >
    )
}

export default Product;