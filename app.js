const express = require('express');
const dbconnect = require('./config');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/api/usuarios', require('./routes/usuario_routes'));
app.use('/api/empleados', require('./routes/empleado_routes'));
app.listen(3005, () => {
    console.log("El servidor se encuentra en el puerto 3005");
});

dbconnect();