const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  usn: {
    type: String,

    unique: true,
    index: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  subject1: {
    type: String,
    enum: ["20MCA41", "20MCA42", "20MCA43", "20MCA44"],
  },
  subject2: {
    type: String,
  },
  subject3: {
    type: String,
  },
  subject4: {
    type: String,
  },
  credit1: {
    type: Number,
  },
  credit2: {
    type: Number,
  },
  credit3: {
    type: Number,
  },
  credit4: {
    type: Number,
  },
  grade1: {
    type: Number,
  },
  grade2: {
    type: Number,
  },
  grade3: {
    type: Number,
  },
  grade4: {
    type: Number,
  },
  internal1: {
    type: Number,
  },
  internal2: {
    type: Number,
  },
  internal3: {
    type: Number,
  },
  internal4: {
    type: Number,
  },
  external1: {
    type: Number,
  },
  external2: {
    type: Number,
  },
  external3: Number,
  external4: {
    type: Number,
  },
  total1: {
    type: Number,
  },
  total2: {
    type: Number,
  },
  total3: {
    type: Number,
  },
  total4: {
    type: Number,
  },
  total: {
    type: Number,
  },
  calculatedPercentage: {
    type: Number,
  },
  calculatedSGPA: {
    type: String,
  },
  result: {
    type: String,
  },
});

const StudentFourthSem = mongoose.model("Student", studentSchema);

module.exports = StudentFourthSem;
