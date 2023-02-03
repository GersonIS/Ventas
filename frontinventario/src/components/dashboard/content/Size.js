import Table from "./table/Table";
import { useState,useEffect } from "react";
import axios from "axios";

const Size = () => {
    const table = ["id","Size","actions"];
    const [datos, setDatos] = useState([]);
    const URL = "http://localhost:5000/tallas/";
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
                    <h1>Sizes</h1>
                    <Table datos={datos} table={table} type="Size" />
                </div>
            </div>
        </div >
    )
}

export default Size;