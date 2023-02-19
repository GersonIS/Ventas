import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Supplier = () => {
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [msg, setMsg] = useState('');
    const URL = "http://localhost:5000/proveedores/";

    const createProveedor = async (e) => {
        e.preventDefault();
        //Trabajar con sesiones para obtener el ID del empleado
        const empleadoId = 1;
        const mensaje = await axios.post(URL, { correo, celular, documento, empresa, empleadoId });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setCorreo('');
        setCelular('');
        setDocumento('');
        setEmpresa('');
    }

    return (
        <form className='ml-3' onSubmit={createProveedor}>
            <h1 className='text-center mb-5'>Registrar Proveedor</h1>
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
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/proveedores" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Supplier;