import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Gender = () => {
    const [genero, setGenero] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/generos/";

    const createGenero = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { genero, empleadoId });
        setTimeout(() => {
            setMsg("");
        },3000);
        setMsg(mensaje.data.message);
        setGenero('');
    }

    return (
        <form className='ml-3' onSubmit={createGenero}>
            <h1 className='text-center mb-5'>Registrar Genero</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} className="form-control border-0" id="genero" placeholder="Genero" required />
                <label htmlFor="genero"><i className="fas fa-window me-2"></i>Genero</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/generos" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Gender;