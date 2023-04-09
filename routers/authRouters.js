const express = require("express");
const router = express.Router();

const { loginAdmin, renewToken, getAdmin, registerAdmin } = require("../controllers/authControllers");
const {validateInputs} = require('../middlewares/inputValidator');
const {validateJWT} = require('../middlewares/validateJWT');

//Get ALL ADMIN
router.get('/admin/all', getAdmin);

//Register New Admin
router.post('/admin/register', registerAdmin);

//Login
router.post('/admin/login', [validateInputs], loginAdmin);

//Renew Token
router.get('/admin/renew', validateJWT, renewToken);

module.exports = router;