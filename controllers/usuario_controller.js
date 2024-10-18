const ModelUser = require('../models/model');
const usuarioCtrl = {}

// Creación de registros
usuarioCtrl.createUser = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.send(respuesta);
}

// Consultar todos los registros
usuarioCtrl.getUsers = async (req, res) => {
    const respuesta = await ModelUser.find({});
    res.send(respuesta);
}

// Consulta por ID
usuarioCtrl.getUniqueUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id);
    res.send(respuesta);

}

// Actualizar registros por ID
usuarioCtrl.editUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelUser.findByIdAndUpdate(id, body, { new: true });       
    res.send(respuesta);

}

// Eliminar por ID
usuarioCtrl.deleteUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({ _id: id });
    res.send(respuesta);
};

module.exports = usuarioCtrl;