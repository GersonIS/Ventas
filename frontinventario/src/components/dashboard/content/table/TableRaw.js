import TableRawAction from "./TableRawAction";
import Category from "./detalle/Category";
import Color from "./detalle/Color";
import Club from "./detalle/Club";
import Market from "./detalle/Market";
import Model from "./detalle/Model";
import Gender from "./detalle/Gender";
import Size from "./detalle/Size";
import Season from "./detalle/Season";

const TableRaw = ({ el, type }) => {
    return (
        <tr>
            {type === "Category" ? <Category el={el} /> : (type === "Club" ? <Club el={el} /> : (type === "Color" ? <Color el={el} /> : (type === "Gender" ? <Gender el={el} /> : (type === "Model" ? <Model el={el} /> : (type === "Size" ? <Size el={el} /> : (type === "Season" ? <Season el={el} /> : (type === "Market" ? <Market el={el} /> : "")))))))}
            <TableRawAction />
        </tr>
    )
}

export default TableRaw;