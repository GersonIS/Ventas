import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Size = () => {
    const [talla, setTalla] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/tallas/";
    const { id } = useParams();

    const updateTalla = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { talla });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setTalla('');
    }

    const getTalla = async () => {
        const size = await axios.get(URL + id);
        setTalla(size.data.talla);
    }

    useEffect(() => {
        getTalla();
    }, []);

    return(
        <form className='ml-3' onSubmit={updateTalla}>
            <h1 className='text-center mb-5'>Actualizar Talla</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={talla} onChange={(e) => setTalla(e.target.value)} className="form-control border-0" id="talla" placeholder="Talla" required />
                <label htmlFor="talla"><i className="fas fa-window me-2"></i>Talla</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/tallas" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Size;