import TableRawDetalle from "./TableRawDetalle";

const TableRaw = ({ el }) => {
    return (
        <tr>
            {
                Object.keys(el).forEach(y => {
                    const value = el[y];
                    console.log(value);
                    <TableRawDetalle value={value}/>
                })
            }
            <td>
                <button className="btn btn-warning me-2"><i className="fas fa-edit me-2"></i>Edit</button>
                <button className="btn btn-danger"><i className="fas fa-trash-alt me-2"></i>Delete</button>
            </td>
        </tr>
    )
}

export default TableRaw;