const data = {
    students: require('../model/students.json'),
    setStudents: function (data) { this.students = data }
}

const getStudent = (req, res, next) => {
    const student = data.students.find(student => student.id === parseInt(req.params.id));
    if(!student) {
        return res.status(400).json({ "message": `Student ${req.params.id} not found` });
    }
    res.json(student)
    // con.query(`SELECT first_name, last_name, grade, date_of_birth FROM students`, (err, results, fields) => {
    //     if (err) throw err
    //     res.send(results)
    // }) 
}


const getAllStudents = (req, res, next) => {
    res.json(data.students)
    // con.query(`SELECT * FROM students_profile CROSS JOIN users`, (err, results, fields) => {
    //     if (err) throw err
    //     console.log(results)
    //     res.send(results)
    // }) 
}

const createNewStudent = (req, res) => {
    const newStudent = {
        id: data.students[data.students.length - 1].id + 1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    if (!newStudent.firstname || !newStudent.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.'});
    }

    data.setStudents([...data.students, newStudent]);
    res.status(201).json(data.students);
    // const {
    //     first_name,
    //     last_name, 
    //     phone,
    //     student_class,
    //     gender,
    //     address,
    //     hometown,
    //     dob,
    //     user
    // } = req.body

    // con.query(`INSERT INTO students_profile (first_name,last_name,phone,student_class,gender,address,hometown,dob,user) VALUES (?,?,?,?,?,?,?,?,?)`, [first_name,last_name,phone,student_class,gender,address,hometown,dob,user], (err, result)=> {
    //     if (err) console.log(err)
    //     return res.send(result) 
    // })
}

const updateStudent = (req, res) => {
    const student = data.students.find(student => student.id === parseInt(req.body.id));
    if(!student) {
        return res.status(400).json({ "message": `Student ${req.body.id} not found` });
    }
    if (req.body.firstname) student.firstname = req.body.firstname;
    if (req.body.lastname) student.lastname = req.body.lastname;

    const filteredArray = data.students.filter(student => student.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, student];
    data.setStudents(unsortedArray.sort((a, b)=> a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.students)
    // const id = req.params.id;
    // const data = {
    //   name: req.body.name,
    //   age: req.body.age
    // };
  
    // let sql = "UPDATE users SET ? WHERE id = ?";
    // let query = connection.query(sql, [data, id], (err, results) => {
    //   if(err) throw err;
    //   res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    // });
}

const deleteStudent = (req, res) => {
    const student = data.students.find(student => student.id === parseInt(req.body.id));
    if(!student) {
        return res.status(400).json({ "message": `Student ${req.body.id} not found` });
    }
    if (req.body.firstname) student.firstname = req.body.firstname;
    if (req.body.lastname) student.lastname = req.body.lastname;

    const filteredArray = data.students.filter(student => student.id !== parseInt(req.body.id));
    data.setStudents([...filteredArray]);
    res.json(data.students)
    // con.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, results) => {
    //     res.send("Deleted successfully")
    //     console.log(results)
    // })
}


module.exports = {
    getStudent,
    getAllStudents,
    createNewStudent,
    updateStudent,
    deleteStudent
}

