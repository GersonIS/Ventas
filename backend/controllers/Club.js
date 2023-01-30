import clubModel from "../models/Club.js";

export const getAllClubes = async (req,res) => {
    try {
        const clubes = await clubModel.findAll();
        res.json(clubes);
    } catch (error) {
        res.json({ message: `Error al traer todos los clubes ${error}` });   
    }
}

export const getClub = async (req, res) => {
    try {
        const club = await clubModel.findAll({ where: { id: req.params.id } });
        res.json(club[0]);
    } catch (error) {
        res.json({ message: `Error al traer un club ${error}` });
    }
}

export const createClub = async (req, res) => {
    try {
        await clubModel.create(req.body);
        res.json({ message: 'Se creo un club con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un club ${error}` });
    }
}

export const updateClub = async (req, res) => {
    try {
        await clubModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo el club con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un club ${error}` });
    }
}

export const deleteClub = async (req, res) => {
    try {
        await clubModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino un club con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un club ${error}` });
    }
}