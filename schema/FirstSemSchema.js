const mongoose = require("mongoose");

const FirstSemSchema = new mongoose.Schema({
  calculatedPercentage: {
    type: Number,
  },
  calculatedSGPA: {
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
  credit5: {
    type: Number,
  },
  credit6: {
    type: Number,
  },
  credit7: {
    type: Number,
  },
  credit8: {
    type: Number,
  },
  external1: {
    type: Number,
  },
  external2: {
    type: Number,
  },
  external3: {
    type: Number,
  },
  external4: {
    type: Number,
  },
  external5: {
    type: Number,
  },
  external6: {
    type: Number,
  },
  external7: {
    type: Number,
  },
  external8: {
    type: Number,
  },
  gender: {
    type: String,
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
  grade5: {
    type: Number,
  },
  grade6: {
    type: Number,
  },
  grade7: {
    type: Number,
  },
  grade8: {
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
  internal5: {
    type: Number,
  },
  internal6: {
    type: Number,
  },
  internal7: {
    type: Number,
  },
  internal8: {
    type: Number,
  },
  name: {
    type: String,
  },
  subject1: {
    type: String,
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
  subject5: {
    type: String,
  },
  subject6: {
    type: String,
  },
  subject7: {
    type: String,
  },
  subject8: {
    type: String,
  },
  total: {
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
  total5: {
    type: Number,
  },
  total6: {
    type: Number,
  },
  total7: {
    type: Number,
  },
  total8: {
    type: Number,
  },
  usn: {
    type: String,

    unique: true,
    index: true,
  },
  result: {
    type: String,
  },
});

const FirstSem = mongoose.model("FirstSem", FirstSemSchema);

module.exports = FirstSem;
