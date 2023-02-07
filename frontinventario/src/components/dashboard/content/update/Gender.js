import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Gender = () => {
    const [genero, setGenero] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/generos/";
    const { id } = useParams();

    const updateGenero = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { genero });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setGenero('');
    }

    const getGenero = async () => {
        const gender = await axios.get(URL + id);
        setGenero(gender.data.genero);
    }

    useEffect(() => {
        getGenero();
    }, []);

    return(
        <form className='ml-3' onSubmit={updateGenero}>
            <h1 className='text-center mb-5'>Actualizar Genero</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} className="form-control border-0" id="genero" placeholder="Genero" required />
                <label htmlFor="genero"><i className="fas fa-window me-2"></i>Genero</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/generos" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Gender;