
const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/get-colors', controllers.getColors);

module.exports = router;