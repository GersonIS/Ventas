const Supplier = ({ el }) => {
    return (
        <>
            <td>{el.id}</td>
            <td>{el.correo}</td>
            <td>{el.celular}</td>
            <td>{el.documento}</td>
            <td>{el.empresa}</td>
        </>
    )
}

export default Supplier;