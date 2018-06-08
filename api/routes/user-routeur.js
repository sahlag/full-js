// Les imports

const express = require('express');
const router = express.Router();
const userController = require(__basedir + '/controllers/user-controller');




router.post('/', userController.register);

// on export le router pour pouvoir l'utiliser dans l'application
module.exports = router;