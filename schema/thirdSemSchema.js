const mongoose = require("mongoose");

const thirdSemSchema = new mongoose.Schema({
  usn: {
    type: String,
    unique: true,
    index: true,
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  subject1: {
    type: String,
  },
  internal1: {
    type: Number,
  },
  external1: {
    type: Number,
  },
  total1: {
    type: Number,
  },
  credit1: {
    type: Number,
  },
  grade1: {
    type: Number,
  },
  subject2: {
    type: String,
  },
  internal2: {
    type: Number,
  },
  external2: {
    type: Number,
  },
  total2: {
    type: Number,
  },
  credit2: {
    type: Number,
  },
  grade2: {
    type: Number,
  },
  subject3: {
    type: String,
  },
  internal3: {
    type: Number,
  },
  external3: {
    type: Number,
  },
  total3: {
    type: Number,
  },
  credit3: {
    type: Number,
  },
  grade3: {
    type: Number,
  },
  subject4: {
    type: String,
  },
  internal4: {
    type: Number,
  },
  external4: {
    type: Number,
  },
  total4: {
    type: Number,
  },
  credit4: {
    type: Number,
  },
  grade4: {
    type: Number,
  },
  subject5: {
    type: String,
  },
  internal5: {
    type: Number,
  },
  external5: {
    type: Number,
  },
  total5: {
    type: Number,
  },
  credit5: {
    type: Number,
  },
  grade5: {
    type: Number,
  },
  subject6: {
    type: String,
  },
  internal6: {
    type: Number,
  },
  external6: {
    type: Number,
  },
  total6: {
    type: Number,
  },
  credit6: {
    type: Number,
  },
  grade6: {
    type: Number,
  },
  subject7: {
    type: String,
  },
  internal7: {
    type: Number,
  },
  external7: {
    type: Number,
  },
  total7: {
    type: Number,
  },
  credit7: {
    type: Number,
  },
  grade7: {
    type: Number,
  },
  subject8: {
    type: String,
  },
  internal8: {
    type: Number,
  },
  external8: {
    type: Number,
  },
  total8: {
    type: Number,
  },
  credit8: {
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

const ThirdSem = mongoose.model("ThirdSem", thirdSemSchema);

module.exports = ThirdSem;
