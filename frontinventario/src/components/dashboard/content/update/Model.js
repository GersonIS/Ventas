import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Model = () => {
    const [modelo, setModelo] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/modelos/";
    const { id } = useParams();

    const updateModelo = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { modelo });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setModelo('');
    }

    const getModelo = async () => {
        const model = await axios.get(URL + id);
        setModelo(model.data.modelo);
    }

    useEffect(() => {
        getModelo();
    }, []);

    return(
        <form className='ml-3' onSubmit={updateModelo}>
            <h1 className='text-center mb-5'>Actualizar Modelo</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} className="form-control border-0" id="modelo" placeholder="Modelo" required />
                <label htmlFor="modelo"><i className="fas fa-window me-2"></i>Model</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/modelos" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Model;