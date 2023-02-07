import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableRawAction = ({ type, id, deleteOpcion }) => {
    const URL = `http://localhost:5000/${type}/`;

    const sweetAlertDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOpcion(URL, id);
                Swal.fire(
                    'Deleted!',
                    `Se elimino un regitro de ${type}`,
                    'success'
                )
            }
        })
    }

    return (
        <td>
            <Link to={`/${type}/actualizar/${id}`} className="btn btn-warning me-2"><i className="fas fa-edit me-2"></i>Editar</Link>
            <button onClick={sweetAlertDelete} className="btn btn-danger"><i className="fas fa-trash-alt me-2"></i>Eliminar</button>
        </td>
    )
}

export default TableRawAction;