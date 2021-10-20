const express = require("express");
require("./db/connection");
const Student = require("../src/models/students");
const studentRouter = require("./routers/student");
const app = express();
const router = new express.Router();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(studentRouter);

//creating new students
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//read the data of registered students
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (err) {
    res.send(err);
  }
});

//get the data of individual student using id

app.get("/students/:name", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get the data of individual student using name
app.get("/student/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const studData = await Student.findOne(name);
    res.send(studData);
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete the student by id
// app.get("/student/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const delStudent= await Student.findByIdAndDelete(id);
//     if(!req.params.id){
//       return res.status(400).send()
//     }
// res.send(delStudent)
//   } catch (error) {
//     res.send(error);
//   }
// });

//update the details of individual student
// app.get("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(updateStudents);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.listen(port, () => {
  console.log(`connected to ${port}`);
});
