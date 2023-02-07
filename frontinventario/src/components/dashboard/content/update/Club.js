import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Club = () => {
    const [descripcion, setDescripcion] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/clubes/";
    const { id } = useParams();

    const updateClub = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { descripcion });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setDescripcion('');
    }

    const getClub = async () => {
        const club = await axios.get(URL + id);
        setDescripcion(club.data.descripcion);
    }

    useEffect(() => {
        getClub();
    }, []);

    return(
        <form className='ml-3' onSubmit={updateClub}>
            <h1 className='text-center mb-5'>Actualizar Club</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control border-0" id="descripcion" placeholder="Club" required />
                <label htmlFor="descripcion"><i className="fas fa-window me-2"></i>Club</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/clubes" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Club;