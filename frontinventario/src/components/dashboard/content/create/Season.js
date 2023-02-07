import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Season = () => {
    const [temporada, setTemporada] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/temporadas/";

    const createTemporada = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { temporada, empleadoId });
        setTimeout(() => {
            setMsg("");
        },3000);
        setMsg(mensaje.data.message);
        setTemporada('');
    }

    return (
        <form className='ml-3' onSubmit={createTemporada}>
            <h1 className='text-center mb-5'>Registrar Temporada</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={temporada} onChange={(e) => setTemporada(e.target.value)} className="form-control border-0" id="temporada" placeholder="Temporada" required />
                <label htmlFor="temporada"><i className="fas fa-window me-2"></i>Temporada</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/Temporadas" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Season;