import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Category = () => {
    const [categoria, setCategoria] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/categorias/";
    const { id } = useParams();

    const updateCategoria = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { categoria });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setCategoria('');
    }

    const getCategoria = async () => {
        const category = await axios.get(URL + id);
        setCategoria(category.data.categoria);
    }

    useEffect(() => {
        getCategoria();
    }, []);

    return (
        <form className='ml-3' onSubmit={updateCategoria}>
            <h1 className='text-center mb-5'>Actualizar Categoria</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-control border-0" id="categoria" placeholder="Categoria" required />
                <label htmlFor="categoria"><i className="fas fa-window me-2"></i>Categoria</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/categorias" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Category;