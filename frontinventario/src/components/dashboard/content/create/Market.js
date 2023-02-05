import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Market = () => {
    const [descripcion, setDescripcion] = useState('');
    const [codigo_postal, setCodigo_postal] = useState('');
    const [direccion, setDireccion] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/tiendas/";

    const createTienda = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { descripcion, codigo_postal, direccion, empleadoId });
        setMsg(mensaje);
        setDescripcion('');
        setCodigo_postal('');
        setDireccion('');
    }

    return (
        <form className='ml-3' onSubmit={createTienda}>
            <h1 className='text-center mb-5'>Registrar Tienda</h1>
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
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/tiendas" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Market;