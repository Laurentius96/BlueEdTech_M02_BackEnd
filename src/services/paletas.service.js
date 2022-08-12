const Paleta = require('../models/Paleta');
const Paletas = require('../models/Paleta');

const findPaletasService = async () => {
    const paletas = await Paletas.find();
    return paletas;
};

const findPaletaByIdService = async parametroId => {
    const paleta = await Paletas.findById(parametroId);
    return paleta;
};

const createPaletaService = async newPaleta => {
    const paletaCriada = await Paleta.create(newPaleta);
    return paletaCriada;
};

const updatePaletaService = (id, paletaEdited) => {
    paletaEdited['id'] = id;
    const paletaIndex = paletas.findIndex(paleta => paleta.id == id);
    paletas[paletaIndex] = paletaEdited;
    return paletaEdited;
};

const deletePaletaService = id => {
    const paletaIndex = paletas.findIndex(paleta => paleta.id == id);
    return paletas.splice(paletaIndex, 1);
};

module.exports = {
    findPaletasService,
    findPaletaByIdService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService,
};
