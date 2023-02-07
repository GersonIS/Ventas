import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Season = () => {
    const [temporada, setTemporada] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/temporadas/";
    const { id } = useParams();

    const updateTemporada = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { temporada });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setTemporada('');
    }

    const getTemporada = async () => {
        const season = await axios.get(URL + id);
        setTemporada(season.data.temporada);
    }

    useEffect(() => {
        getTemporada();
    }, []);

    return(
        <form className='ml-3' onSubmit={updateTemporada}>
            <h1 className='text-center mb-5'>Actualizar Temporada</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={temporada} onChange={(e) => setTemporada(e.target.value)} className="form-control border-0" id="temporada" placeholder="Temporada" required />
                <label htmlFor="temporada"><i className="fas fa-window me-2"></i>Temporada</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/Temporadas" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Season;