const express = require("express");
const router = express.Router();
const engineController = require('../controller/engine.controller')

// ENGINE
router.post('/engine', engineController.create)
router.get('/engine/init/:id', engineController.initEngine)
router.delete('/engine/:id', engineController.deleteEngine)


// SEND MESSAGE
router.post('/engine/send', engineController.sendEngine)

module.exports = router;
