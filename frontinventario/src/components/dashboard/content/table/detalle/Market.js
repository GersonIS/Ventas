const Market = ({el}) => {
    return(
        <>
            <td>{el.id}</td>
            <td>{el.descripcion}</td>
            <td>{el.codigo_postal}</td>
            <td>{el.direccion}</td>
        </>
    )
}

export default Market;