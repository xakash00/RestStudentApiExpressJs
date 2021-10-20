const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/studentsapi", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
  .then(() => {
    console.log("connection established");
  })
  .catch((e) => {
    console.log("no connection");
  });
