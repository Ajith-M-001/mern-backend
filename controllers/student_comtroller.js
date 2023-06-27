const StudentFourthSem = require("../schema/studentSchema");
const ThirdSem = require("../schema/thirdSemSchema");
const FirstSem = require("../schema/FirstSemSchema");
const secondSem = require("../schema/secondSemSchema");

const addFirstSemStudentMarks = async (req, res) => {
  try {
    // Create a new student instance using the student details
    const newStudent = new FirstSem(req.body);

    // Save the student to the database
    await newStudent.save();

    console.log("Student saved successfully");

    res.status(200).json({ message: "Your data saved successfully" });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.usn) {
      console.error("Error saving student: Duplicate USN");
      return res.status(400).json({
        error:
          "This USN already exists. Your data is not saved in the database. Please check.",
      });
    } else {
      console.error("Error saving student:", error);
      return res
        .status(500)
        .json({ error: "server Error (or) database error" });
    }
  }
};

const addSecondSemStudentMarks = async (req, res) => {
  try {
    // Create a new student instance using the student details
    const newStudent = new secondSem(req.body);

    // Save the student to the database
    await newStudent.save();

    console.log("Student saved successfully");

    res.status(200).json({ message: "Your data saved successfully" });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.usn) {
      console.error("Error saving student: Duplicate USN");
      return res.status(400).json({
        error:
          "This USN already exists. Your data is not saved in the database. Please check.",
      });
    } else {
      console.error("Error saving student:", error);
      return res
        .status(500)
        .json({ error: "server Error (or) database error" });
    }
  }
};

const addThirdSemStudentMarks = async (req, res) => {
  try {
    // Create a new student instance using the student details
    const newStudent = new ThirdSem(req.body);

    // Save the student to the database
    await newStudent.save();

    console.log("Student saved successfully");

    res.status(200).json({ message: "Your data saved successfully" });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.usn) {
      console.error("Error saving student: Duplicate USN");
      return res.status(400).json({
        error:
          "This USN already exists. Your data is not saved in the database. Please check.",
      });
    } else {
      console.error("Error saving student:", error);
      return res
        .status(500)
        .json({ error: "server Error (or) database error" });
    }
  }
};

const addFourthSemStudentMarks = async (req, res) => {
  try {
    // Create a new student instance using the student details
    const newStudent = new StudentFourthSem(req.body);

    // Save the student to the database
    await newStudent.save();

    console.log("Student saved successfully");

    res.status(200).json({ message: "Your data saved successfully" });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.usn) {
      console.error("Error saving student: Duplicate USN");
      return res.status(400).json({
        error:
          "This USN already exists. Your data is not saved in the database. Please check.",
      });
    } else {
      console.error("Error saving student:", error);
      return res
        .status(500)
        .json({ error: "server Error (or) database error" });
    }
  }
};

const getThirdSemAllData = async (req, res) => {
  try {
    // Retrieve all data from the database
    // const firstSemData = await FirstSem.find();
    // const secondSemData = await secondSem.find();
    const thirdSemData = await ThirdSem.find();
    // const fourthSemData = await StudentFourthSem.find();

    // Combine all data into a single array or object as needed
    // Combine all data into a single array
    const allData = [
      // ...firstSemData,
      // ...secondSemData,
      ...thirdSemData,
      // ...fourthSemData,
    ];

    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error (or) database error" });
  }
};
const getFirstSemAllData = async (req, res) => {
  try {
    // Retrieve all data from the database
    const firstSemData = await FirstSem.find();
    // const secondSemData = await secondSem.find();
    // const thirdSemData = await ThirdSem.find();
    // const fourthSemData = await StudentFourthSem.find();

    // Combine all data into a single array or object as needed
    // Combine all data into a single array
    const allData = [
      ...firstSemData,
      // ...secondSemData,
      // ...thirdSemData,
      // ...fourthSemData,
    ];

    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error (or) database error" });
  }
};
const getFourthSemAllData = async (req, res) => {
  try {
    // Retrieve all data from the database
    // const firstSemData = await FirstSem.find();
    // const secondSemData = await secondSem.find();
    // const thirdSemData = await ThirdSem.find();
    const fourthSemData = await StudentFourthSem.find();

    // Combine all data into a single array or object as needed
    // Combine all data into a single array
    const allData = [
      // ...firstSemData,
      // ...secondSemData,
      // ...thirdSemData,
      ...fourthSemData,
    ];

    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error (or) database error" });
  }
};
const getSecondSemAllData = async (req, res) => {
  try {
    // Retrieve all data from the database
    // const firstSemData = await FirstSem.find();
    const secondSemData = await secondSem.find();
    // const thirdSemData = await ThirdSem.find();
    // const fourthSemData = await StudentFourthSem.find();

    // Combine all data into a single array or object as needed
    // Combine all data into a single array
    const allData = [
      // ...firstSemData,
      ...secondSemData,
      // ...thirdSemData,
      // ...fourthSemData,
    ];

    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error (or) database error" });
  }
};

module.exports = {
  addFourthSemStudentMarks,
  addThirdSemStudentMarks,
  addFirstSemStudentMarks,
  addSecondSemStudentMarks,
  getThirdSemAllData,
  getFourthSemAllData,
  getFirstSemAllData,
  getSecondSemAllData
};
