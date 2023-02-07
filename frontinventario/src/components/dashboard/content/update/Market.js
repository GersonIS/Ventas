import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Market = () => {
    const [descripcion, setDescripcion] = useState('');
    const [codigo_postal, setCodigo_postal] = useState('');
    const [direccion, setDireccion] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/tiendas/";
    const { id } = useParams();

    const updateTienda = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { descripcion, codigo_postal, direccion });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setDescripcion('');
        setCodigo_postal('');
        setDireccion('');
    }

    const getTienda = async () => {
        const tienda = await axios.get(URL + id);
        setDescripcion(tienda.data.descripcion);
        setCodigo_postal(tienda.data.codigo_postal);
        setDireccion(tienda.data.direccion);
    }

    useEffect(() => {
        getTienda();
    }, []);

    return(
        <form className='ml-3' onSubmit={updateTienda}>
            <h1 className='text-center mb-5'>Actualizar Tienda</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control border-0" id="descripcion" placeholder="Descripcion" required />
                <label htmlFor="descripcion"><i className="fas fa-window me-2"></i>Descripcion</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={codigo_postal} onChange={(e) => setCodigo_postal(e.target.value)} className="form-control border-0" id="codigo_postal" placeholder="Codigo Postal" required />
                <label htmlFor="codigo_postal"><i className="fas fa-window me-2"></i>Codigo Postal</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="form-control border-0" id="direccion" placeholder="Direccion" required />
                <label htmlFor="direccion"><i className="fas fa-window me-2"></i>Direccion</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/tiendas" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Market;