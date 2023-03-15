import { useNavigate } from "react-router-dom";

const Navbar = ({changeState}) => {
    const navigate = useNavigate();
    const newValue = () => {
        changeState(true);
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark" style={{background: "#1D0034"}}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between d-md-none d-block">
                    <button className="btn px-1 py-0 open-btn me-2" onClick={newValue}><i className="fal fa-stream"></i></button>
                    <button onClick={() => navigate('/main') } className="navbar-brand fs-4 border-0 rounded px-2">GJR</button>
                </div>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fal fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 text-end" style={{width: "150px"}}>
                        <li className="nav-item dropdown float-right" style={{width: "150px"}}>
                            <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Gerson
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="!#">Action</a></li>
                                <li><a className="dropdown-item" href="!#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="!#">LogOut</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;