const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkIfAuthenticated = require('../middlewares/auth-middleware');
const ProductsController = require('../controllers/origen-controller');

