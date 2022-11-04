const express = require('express');
const userController = require('../../controllers/users.controller');
const router = express.Router()

router
    .get("/all", userController.getAllUser)
module.exports = router;