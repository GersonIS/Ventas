import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Category = () => {
    const [categoria, setCategoria] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/categorias/";

    const createCategoria = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { categoria, empleadoId });
        setTimeout(() => {
            setMsg("");
        },3000);
        setMsg(mensaje.data.message);
        setCategoria('');
    }

    return (
        <form className='ml-3' onSubmit={createCategoria}>
            <h1 className='text-center mb-5'>Registrar Categoria</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-control border-0" id="categoria" placeholder="Categoria" required />
                <label htmlFor="categoria"><i className="fas fa-window me-2"></i>Categoria</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/categorias" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Category;