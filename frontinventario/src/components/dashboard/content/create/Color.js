import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Color = () => {
    const [color, setColor] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/colores/";

    const createColor = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { color, empleadoId });
        setTimeout(() => {
            setMsg("");
        },3000);
        setMsg(mensaje.data.message);
        setColor('');
    }

    return (
        <form className='ml-3' onSubmit={createColor}>
            <h1 className='text-center mb-5'>Registrar Color</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="form-control border-0" id="color" placeholder="Color" required />
                <label htmlFor="color"><i className="fas fa-window me-2"></i>Color</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/colores" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Color;