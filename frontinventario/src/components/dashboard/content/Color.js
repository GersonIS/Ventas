import Table from "./table/Table";
import { useState,useEffect } from "react";
import axios from "axios";

const Color = () => {
    const table = ["id","Color","actions"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/colores/";
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
                    <h1>Colors</h1>
                    <Table datos={datos} table={table} type="Color"/>
                </div>
            </div>
        </div >
    )
}

export default Color;