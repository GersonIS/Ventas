import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const [codigo, setCodigo] = useState('');
    const [producto, setProducto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ruta1, setRuta1] = useState(null);
    const [ruta2, setRuta2] = useState(null);
    const [ruta3, setRuta3] = useState(null);
    const [ruta4, setRuta4] = useState(null);
    const [datos, setDatos] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [msg, setMsg] = useState('');
    const [selectedImage1, setSelectedImage1] = useState();
    const [selectedImage2, setSelectedImage2] = useState();
    const [selectedImage3, setSelectedImage3] = useState();
    const [selectedImage4, setSelectedImage4] = useState();
    const URL = "http://localhost:5000/productos/";
    const URI = "http://localhost:5000/categorias/"
    const formData = new FormData();

    const getCategorias = async () => {
        const res = await axios.get(URI);
        setDatos(res.data);
    }

    useEffect(() => {
        getCategorias();
    }, [])

    const createProducto = async (e) => {
        //cambiar por el Id del empleado que esta registrando el producto
        const empleadoId = 1;
        e.preventDefault();
        formData.append("codigo", codigo);
        formData.append("producto", producto);
        formData.append("descripcion", descripcion);
        formData.append("ruta1", ruta1);
        formData.append("ruta2", ruta2);
        formData.append("ruta3", ruta3);
        formData.append("ruta4", ruta4);
        formData.append("categoriaId", categoria);
        formData.append("empleadoId", empleadoId)
        const mensaje = await axios.post(URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        });
        setTimeout(() => {
            setMsg("");
        }, 3000);
        setMsg(mensaje.data.message);
        setCodigo('');
        setProducto('');
        setDescripcion('');
        setRuta1(null);
        setSelectedImage1(null);
        setSelectedImage2(null);
        setSelectedImage3(null);
        setSelectedImage4(null);
        setRuta2(null);
        setRuta3(null);
        setRuta4(null);
        setCategoria('');
    }

    const imageChange1 = (e) => {
        setRuta1(e.target.files[0]);
        setSelectedImage1(window.URL.createObjectURL(e.target.files[0]));
    }

    const imageChange2 = (e) => {
        setRuta2(e.target.files[0]);
        setSelectedImage2(window.URL.createObjectURL(e.target.files[0]));
    }

    const imageChange3 = (e) => {
        setRuta3(e.target.files[0]);
        setSelectedImage3(window.URL.createObjectURL(e.target.files[0]));
    }

    const imageChange4 = (e) => {
        setRuta4(e.target.files[0]);
        setSelectedImage4(window.URL.createObjectURL(e.target.files[0]));
    }

    return (
        //codigo, producto, descripcion, ruta1, ruta2, ruta3, ruta4, categoriaId, empleadoId
        <form className='ml-3' onSubmit={createProducto}>
            <h1 className='text-center mb-5'>Registrar Categoria</h1>
            {msg !== '' ? <div className="alert alert-primary" role="alert">{msg}</div> : ''}
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} className="form-control border-0" id="codigo" placeholder="Codigo" required />
                <label htmlFor="codigo"><i className="fas fa-window me-2"></i>Codigo</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} className="form-control border-0" id="producto" placeholder="Producto" required />
                <label htmlFor="producto"><i className="fas fa-window me-2"></i>Producto</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control border-0" id="descripcion" placeholder="Descripcion" required />
                <label htmlFor="descripcion"><i className="fas fa-window me-2"></i>Descripcion</label>
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="file" name="ruta1" onChange={(e) => imageChange1(e)} className="form-control border-0" id="ruta1" placeholder="ruta1" required />
                <label htmlFor="ruta1"><i className="fas fa-window me-2"></i>Foto 1</label>
            </div>
            <div className="col-12 text-center mb-3">
                <img src={selectedImage1} alt="Preview" style={{ maxWidth: "300px" }} />
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="file" name="ruta2" onChange={(e) => imageChange2(e)} className="form-control border-0" id="ruta2" placeholder="ruta2" required />
                <label htmlFor="ruta2"><i className="fas fa-window me-2"></i>Foto 2</label>
            </div>
            <div className="col-12 text-center mb-3">
                <img src={selectedImage2} alt="Preview" style={{ maxWidth: "300px" }} />
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="file" name="ruta3" onChange={(e) => imageChange3(e)} className="form-control border-0" id="ruta3" placeholder="ruta3" required />
                <label htmlFor="ruta3"><i className="fas fa-window me-2"></i>Foto 3</label>
            </div>
            <div className="col-12 text-center mb-3">
                <img src={selectedImage3} alt="Preview" style={{ maxWidth: "300px" }} />
            </div>
            <div className="form-floating mb-3 border-bottom">
                <input type="file" name="ruta4" onChange={(e) => imageChange4(e)} className="form-control border-0" id="ruta4" placeholder="ruta4" required />
                <label htmlFor="ruta4"><i className="fas fa-window me-2"></i>Foto 4</label>
            </div>
            <div className="col-12 text-center mb-3">
                <img src={selectedImage4} alt="Preview" style={{ maxWidth: "300px" }} />
            </div>
            <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => setCategoria(e.target.value)}>
                {datos.map((el) => {
                    return <option value={el.id} key={el.id}>{el.categoria}</option>
                })}
            </select>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrar</button>
            </div>
            <div className="text-center mt-3">
                <Link to="/productos" className="text-decoration-none text-dark" style={{ backgroundColor: 'transparent' }} >Back</Link>
            </div>
        </form>
    )
}

export default Product;