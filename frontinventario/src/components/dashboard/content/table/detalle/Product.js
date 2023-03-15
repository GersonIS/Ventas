const Product = ({el}) => {
    //codigo, producto, descripcion, ruta1, ruta2, ruta3, ruta4, categoriaId, empleadoId
    return(
        <>
            <td>{el.codigo}</td>
            <td>{el.producto}</td>
            <td>{el.descripcion}</td>
        </>
    )
}

export default Product;