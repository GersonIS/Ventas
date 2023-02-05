import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ changeState, door }) => {
    const navigate = useNavigate();
    const newValue = () => {
        changeState(false);
    }
    return (
        <div className={door ? "sidebar active" : "sidebar"} id="side_nav">
            <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
                <h1 className="fs-4"><button onClick={() => navigate('/main')} className="fw-bolder navbar-brand bg-white text-dark fs-4 border-0 rounded px-2">GJR</button><span
                    className="text-white">RenJaiGer</span></h1>
                <button className="btn d-md-none d-block close-btn px-1 py-0 text-white" onClick={newValue}><i
                    className="fal fa-stream"></i></button>
            </div>
            <ul className="list-unstyled px-2 list" id='list'>
                <li>
                    <NavLink to="/main" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Main</NavLink>
                </li>
                <li>
                    <NavLink to="/categorias" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Categorias</NavLink>
                </li>
                <li>
                    <NavLink to="/categorias" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Clientes</NavLink>
                </li>
                <li>
                    <NavLink to="/clubes" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Clubes</NavLink>
                </li>
                <li>
                    <NavLink to="/colores" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Colores</NavLink>
                </li>
                <li>
                    <NavLink to="/categorias" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Compras</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className="text-decoration-none d-block px-3 py-2"><i
                        className="fal fa-users me-2"></i>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/generos" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Generos</NavLink>
                </li>
                <li>
                    <NavLink to="/modelos" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Modelos</NavLink>
                </li>
                <li>
                    <NavLink to="/categorias" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/categorias" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Proveedores</NavLink>
                </li>
                <li>
                    <NavLink to="/tallas" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Tallas</NavLink>
                </li>
                <li>
                    <NavLink to="/temporadas" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Temporadas</NavLink>
                </li>
                <li>
                    <NavLink to="/tiendas" className="text-decoration-none d-block px-3 py-2"><i
                        className="fas fa-cloud-sun-rain me-2"></i>Tiendas</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;