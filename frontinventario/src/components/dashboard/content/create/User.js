import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const User = () => {
    //correo, celular, documento, username, password, ruta, sueldo, rol
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ruta, setRuta] = useState(null);
    const [sueldo, setSueldo] = useState('');
    const [rol, setRol] = useState('');
    const [msg, setMsg] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const URL = "http://localhost:5000/usuarios/";
    const formData = new FormData();

    const createEmpleado = async (e) => {
        e.preventDefault();
        formData.append("correo", correo);
        formData.append("celular", celular);
        formData.append("documento", documento);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("ruta", ruta);
        formData.append("sueldo", sueldo);
        formData.append("rol", rol);
        const mensaje = await axios.post(URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setCorreo('');
        setCelular('');
        setDocumento('');
        setUsername('');
        setPassword('');
        setRuta('');
        setSueldo('');
        setRol('');
    }
    
    const imageChange = (e) => {
        setRuta(e.target.files[0]);
        setSelectedImage(window.URL.createObjectURL(e.target.files[0]));
    }

    return (
        <form className='ml-3' onSubmit={createEmpleado}>
            <h1 className='text-center mb-5'>Registrar Usuario</h1>
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
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control border-0" id="username" placeholder="Usuario" required />
                <label htmlFor="username"><i className="fas fa-window me-2"></i>Usuario</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control border-0" id="password" placeholder="Contraseña" required />
                <label htmlFor="password"><i className="fas fa-window me-2"></i>Contraseña</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="file" name="ruta" onChange={ (e) => imageChange(e) } className="form-control border-0" id="ruta" placeholder="ruta" required />
                <label htmlFor="ruta"><i className="fas fa-window me-2"></i>Foto</label>
            </div>
            <div className="col-12 text-center mb-3">
                <img src={selectedImage} alt="Preview" style={{maxWidth: "300px"}}/>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={sueldo} onChange={(e) => setSueldo(e.target.value)} className="form-control border-0" id="sueldo" placeholder="Sueldo" required />
                <label htmlFor="sueldo"><i className="fas fa-window me-2"></i>Sueldo</label>
            </div>
            <div className="btn-group mb-3" onChange={(e) => setRol(e.target.value)}>
                <input type="radio" className="btn-check" name="rol" id="administrador" value="administrador" />
                <label className="btn btn-secondary" htmlFor="administrador">Administrador</label>
                <input type="radio" className="btn-check" name="rol" id="empleado" value="empleado" />
                <label className="btn btn-secondary" htmlFor="empleado">Empleado</label>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/usuarios" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default User;