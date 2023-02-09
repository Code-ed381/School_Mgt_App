// const mysql = require('mysql');
const mongoose = require('mongoose')

// module.exports =  mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: 'school_app',
//     multipleStatements: true
// });
mongoose.set("strictQuery", true);

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB 