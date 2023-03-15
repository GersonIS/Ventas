import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Rightside = () => {
    const [msg, setMsg] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const URL = "http://localhost:5000/usuarios/login";
    const login = async (e) => {
        e.preventDefault();
        const mensaje = await axios.post(URL, { username, password });
        if(mensaje.data.message === ""){
            navigate("/usuarios");
        }else{
            setTimeout(() => {
                setMsg("");
            },3000);
            setMsg(mensaje.data.message);
        }
    }
    return (
        <form className='ml-3 mt-5 p-3 m-3' onSubmit={login}>
            <h1 className='text-center mb-4 mt-5 fst-italic'>Dulce Entrega</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control border-0" id="username" placeholder="Usuario" required />
                <label htmlFor="username"><i className="fas fa-window me-2"></i>Usuario</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control border-0" id="password" placeholder="Contraseña" required />
                <label htmlFor="password"><i className="fas fa-window me-2"></i>Contraseña</label>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-end">Olvidaste tu contraseña?<span className="fw-bolder"> Haz click aqui</span></p>
                </div>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
            </div>
            <button type="submit" className='col-12 d-flex text-white border-0 rounded pt-3 pb-3' style={{ background: "#1D0034", width: "100%" }}>
                <div className='col-11'>
                    Ingresar
                </div>
                <div className='col-1'>
                    <i className="far fa-arrow-right"></i>
                </div>
            </button>
        </form>
    )
}

export default Rightside;