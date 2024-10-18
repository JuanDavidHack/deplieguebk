const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado_controller');

router.get('/', empleadoCtrl.getEmployees);
router.post('/', empleadoCtrl.createEmployee);
router.get('/:id', empleadoCtrl.getUniqueEmployee);
router.put('/:id', empleadoCtrl.editEmployee);
router.delete('/:id', empleadoCtrl.deleteEmployee); 

module.exports = router;