const { Router } = require('express');
const UserRouter = require("./UserRoute");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/", UserRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
 