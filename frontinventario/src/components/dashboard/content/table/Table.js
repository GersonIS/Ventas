import TableHead from "./TableHead";
import TableRaw from "./TableRaw";

const Table = ({ table, datos, type }) => {
    return (
        <table className="table">
            <thead>
                <TableHead table={table} />
            </thead>
            <tbody>
                {datos.length === 0 ? (
                    <tr><td colSpan={table.length}> Sin datos</td></tr>
                ) : (datos.map(el => <TableRaw key={el.id} type={type} el={el} />))}
            </tbody>
        </table>
    )
}

export default Table;