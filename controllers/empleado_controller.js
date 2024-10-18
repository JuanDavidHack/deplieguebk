const ModelEmpleado = require('../models/empleado');
const empleadoCtrl = {}

// Creación de registros
empleadoCtrl.createEmployee = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelEmpleado.create(body);
    res.send(respuesta);
}

// Consultar todos los registros
empleadoCtrl.getEmployees = async (req, res) => {
    const respuesta = await ModelEmpleado.find({});
    res.send(respuesta);
}

// Consulta por ID
empleadoCtrl.getUniqueEmployee = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById(id);
    res.send(respuesta);

}

// Actualizar registros por ID
empleadoCtrl.editEmployee = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelEmpleado.findByIdAndUpdate(id, body, { new: true });       
    res.send(respuesta);

}

// Eliminar por ID
empleadoCtrl.deleteEmployee = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.deleteOne({ _id: id });
    res.send(respuesta);
};

module.exports = empleadoCtrl;