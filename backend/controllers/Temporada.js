import temporadaModel from "../models/Temporada.js"

export const getAllTemporadas = async (req, res) => {
    try {
        const temporadas = await temporadaModel.findAll();
        res.json(temporadas);
    } catch (error) {
        res.json({ message: `Error al traer todos las temporadas ${error}` });
    }
}

export const getTemporada = async (req, res) => {
    try {
        const temporada = await temporadaModel.findAll({ where: { id: req.params.id } });
        res.json(temporada[0]);
    } catch (error) {
        res.json({ message: `Error al traer una temporada ${error}` });
    }
}

export const createTemporada = async (req, res) => {
    try {
        await temporadaModel.create(req.body);
        res.json({ message: 'Se creo la temporada con exito' });
    } catch (error) {
        res.json({ message: `Error al crear una temporada ${error}` });
    }
}

export const updateTemporada = async (req, res) => {
    try {
        await temporadaModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo la temporada con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar una temporada ${error}` });
    }
}

export const deleteTemporada = async (req, res) => {
    try {
        await temporadaModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino la temporada con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar una temporada ${error}` });
    }
}