const Student = require('../model/Student')

const getStudent = async (req, res, next) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Student ID required' })

    const student = await Student.findOne({ _id: req.params.id }).exec();

    if(!student) {
        return res.status(204).json({ 'message': `No student matches ID ${ req.body.id }`})
    }
    res.json(student)
}


const getAllStudents = async (req, res, next) => {
    const students = await Student.find();

    if (!students) return res.status(204).json({ 'message': 'No students found.'})
    res.json(students)
}

const createNewStudent = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required '})
    }

    try {
        const result = await Student.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
        })

        res.status(201).json(result)
    } catch (error) {
        console.log(error)
    }
}

const updateStudent = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required '})
    }

    const student = await Student.findOne({ _id: req.body.id }).exec()

    if(!student) {
        return res.status(400).json({ "message": `No student matches ID ${req.body.id}` });
    }
    if (req.body?.firstname) student.firstname = req.body.firstname;
    if (req.body?.lastname) student.lastname = req.body.lastname;

    const result = await student.save();
    res.json(result)
}
 
const deleteStudent = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Student ID required' })

    const student = await Student.findOne({ _id: req.body.id }).exec()
    if(!student) {
        return res.status(400).json({ "message": `Student ${req.body.id} not found` });
    }

    const result = await Student.deleteOne({ _id: req.body.id })

    res.json(result)
}


module.exports = {
    getStudent,
    getAllStudents,
    createNewStudent,
    updateStudent,
    deleteStudent
}

