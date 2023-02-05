import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Size = () => {
    const [talla, setTalla] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/tallas/";

    const createTalla = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { talla, empleadoId });
        setMsg(mensaje);
        setTalla('');
    }

    return (
        <form className='ml-3' onSubmit={createTalla}>
            <h1 className='text-center mb-5'>Registrar Talla</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={talla} onChange={(e) => setTalla(e.target.value)} className="form-control border-0" id="talla" placeholder="Talla" required />
                <label htmlFor="talla"><i className="fas fa-window me-2"></i>Talla</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/tallas" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Size;