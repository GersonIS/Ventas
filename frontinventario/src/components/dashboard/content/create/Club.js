import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Club = () => {
    const [descripcion, setDescripcion] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/clubes/";

    const createClub = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { descripcion, empleadoId });
        setMsg(mensaje);
        setDescripcion('');
    }

    return (
        <form className='ml-3' onSubmit={createClub}>
            <h1 className='text-center mb-5'>Registrar Club</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control border-0" id="descripcion" placeholder="Club" required />
                <label htmlFor="descripcion"><i className="fas fa-window me-2"></i>Club</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/clubes" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Club;