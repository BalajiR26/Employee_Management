import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.error("connection error", err)
    } else {
        console.log("Connected")
    }
})

export default con;

