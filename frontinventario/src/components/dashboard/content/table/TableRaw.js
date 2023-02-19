import TableRawAction from "./TableRawAction";
import Category from "./detalle/Category";
import Color from "./detalle/Color";
import Club from "./detalle/Club";
import Market from "./detalle/Market";
import Model from "./detalle/Model";
import Gender from "./detalle/Gender";
import Size from "./detalle/Size";
import Season from "./detalle/Season";
import Supplier from "./detalle/Supplier";

const TableRaw = ({ el, type, deleteOpcion }) => {
    return (
        <tr>
            {type === "categorias" ? <Category el={el} /> : (type === "clubes" ? <Club el={el} /> : (type === "colores" ? <Color el={el} /> : (type === "generos" ? <Gender el={el} /> : (type === "modelos" ? <Model el={el} /> : (type === "tallas" ? <Size el={el} /> : (type === "temporadas" ? <Season el={el} /> : (type === "tiendas" ? <Market el={el} /> : (type === "proveedores" ? <Supplier el={el}/> : ""))))))))}
            <TableRawAction id={el.id} type={type} deleteOpcion={deleteOpcion}/>
        </tr>
    )
}

export default TableRaw;