import Table from "./table/Table";
import { useState,useEffect } from "react";
import axios from "axios";

const Market = () => {
    const table = ["id","Market","Codigo Postal","Direccion","actions"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/tiendas/";
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
                    <h1>Markets</h1>
                    <Table datos={datos} table={table} type="Market" />
                </div>
            </div>
        </div >
    )
}

export default Market;