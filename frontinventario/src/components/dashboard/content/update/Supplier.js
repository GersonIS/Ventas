import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Supplier = () => {
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/proveedores/";
    const { id } = useParams();

    const updateProveedor = async (e) => {
        e.preventDefault();
        const mensaje = await axios.put(URL + id, { correo, celular, documento, empresa });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setCorreo('');
        setCelular('');
        setDocumento('');
        setEmpresa('');
    }

    const getProveedor = async () => {
        const proveedor = await axios.get(URL + id);
        setCorreo(proveedor.data.correo);
        setCelular(proveedor.data.celular);
        setDocumento(proveedor.data.documento);
        setEmpresa(proveedor.data.empresa);
    }

    useEffect(() => {
        getProveedor();
    }, []);

    return (
        <form className='ml-3' onSubmit={updateProveedor}>
            <h1 className='text-center mb-5'>Actualizar Proveedor</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} className="form-control border-0" id="correo" placeholder="Correo" required />
                <label htmlFor="correo"><i className="fas fa-window me-2"></i>Correo</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} className="form-control border-0" id="celular" placeholder="Celular" required />
                <label htmlFor="celular"><i className="fas fa-window me-2"></i>Celular</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} className="form-control border-0" id="documento" placeholder="Documento" required />
                <label htmlFor="documento"><i className="fas fa-window me-2"></i>Documento</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className="form-control border-0" id="empresa" placeholder="Empresa" required />
                <label htmlFor="empresa"><i className="fas fa-window me-2"></i>Empresa</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Actualizar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/proveedores" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Supplier;