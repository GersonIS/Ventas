const TableHead = ({ table }) => {
    return (
        <tr>
            {table.map((el,index) => <th key={index} scope="col">{ el }</th>)}
        </tr>
    )
}

export default TableHead;