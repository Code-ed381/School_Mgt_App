const express = require('express')
const router = express.Router();
const path = require('path')
const studentsController = require('../../controllers/studentsController')

router.route('/')
    .get(studentsController.getAllStudents)
    .post(studentsController.createNewStudent)
    .put(studentsController.updateStudent)
    .delete(studentsController.deleteStudent)

router.route('/:id')
    .get(studentsController.getStudent)


module.exports = router;