import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Color = () => {
    const [color, setColor] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/colores/";
    const { id } = useParams();

    const updateColor = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { color });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setColor('');
    }

    const getColor = async () => {
        const colore = await axios.get(URL + id);
        setColor(colore.data.color);
    }

    useEffect(() => {
        getColor();
    }, []);

    return(
        <form className='ml-3' onSubmit={updateColor}>
            <h1 className='text-center mb-5'>Actualizar Color</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="form-control border-0" id="color" placeholder="Color" required />
                <label htmlFor="color"><i className="fas fa-window me-2"></i>Color</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/colores" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Color;