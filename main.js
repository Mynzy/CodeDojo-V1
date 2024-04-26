const express = require("express"); //require to kira cm import
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database ("./database.db");
const app = express();  //jadikan app tu object to use its attribute
const PORT = 8080;  //pilih port x kisah no apa

db.serialize(() =>{                             //AUTOINCREMENT so dia naik 1 1 
    db.run(`CREATE TABLE IF NOT EXISTS Student (
            StudID INTEGER PRIMARY KEY AUTOINCREMENT,
            StudName TEXT NOT NULL,
            StudGender TEXT NOT NULL      
        )`,(err) => {
            if (err) console.log("Error building in this table");
        })
    db.run(`CREATE TABLE IF NOT EXISTS Lecturer (
            LectID INTEGER PRIMARY KEY AUTOINCREMENT,
            LectName TEXT NOT NULL,
            LectGender TEXT NOT NULL      
        )`,(err) => {
            if (err) console.log("Error building in this table");
            })
    db.run(`CREATE TABLE IF NOT EXISTS Course (
            CourID INTEGER PRIMARY KEY AUTOINCREMENT,
            CourName TEXT NOT NULL,
            CourExist TEXT NOT NULL      
        )`,(err) => {
            if (err) console.log("Error building in this table");
            })
    db.run(`INSERT INTO Student(StudID, StudName, StudGender) VALUES (?, ?, ?)`,[, 'Muhaimin', 'MALE']);
    db.run(`INSERT INTO Lecturer(LectID, LectName, LectGender) VALUES (?, ?, ?)`,[, 'Hakim', 'FEMALE']);
    db.run(`INSERT INTO Course(CourID, CourName, CourExist) VALUES (?, ?, ?)`,[, 'EOP', 'EXIST']);
});


app.get("/", (req, res) =>{ //request and response
    res.status(200).sendFile("C:/Users/dellz/OneDrive/Documents/CODING/CodoDojo/index.html");
});

app.get("/products", (req, res) =>{ // /hello tu ada lah endpoint
    res.status(200).json({message:"name : donut, type : check date"});
});

app.get("/user", (req, res) =>{ // /hello tu ada lah endpoint
    res.status(200).json({message:"user: Muhaimin, Password : 1234"});
});

app.get("/student", (req,res) =>{
    db.all('SELECT * FROM Student', (err,rows) => {
        res.status(200).send(rows);
    })
})

app.get("/lecturer", (req,res) =>{
    db.all('SELECT * FROM Lecturer', (err,rows) => {
        res.status(200).send(rows);
    })
})

app.get("/course", (req,res) =>{
    db.all('SELECT * FROM Course', (err,rows) => {
        res.status(200).send(rows);
    })
})

//app.listen(PORT, () => console.log("SERVER STARTED AT PORT 8080"));  both are good
app.listen(PORT, () => console.log(`SERVER STARTED ${PORT}`));  // this is backtick btw
// app.listen accept port number & funcion as parameter (arrow function)
