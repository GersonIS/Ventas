import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Model = () => {
    const [modelo, setModelo] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/modelos/";

    const createModelo = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { modelo, empleadoId });
        setMsg(mensaje);
        setModelo('');
    }

    return (
        <form className='ml-3' onSubmit={createModelo}>
            <h1 className='text-center mb-5'>Registrar Modelo</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} className="form-control border-0" id="modelo" placeholder="Modelo" required />
                <label htmlFor="modelo"><i className="fas fa-window me-2"></i>Model</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/modelos" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Model;