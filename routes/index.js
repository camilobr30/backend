const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/:userid', userController.getUser)
router.post('/create/user', userController.createUser)
router.put('/update/user/:userid', userController.updateThisUser)
router.patch('/enrollment/user/:userid', userController.updatethisStatusEnrollment)

module.exports = { router }