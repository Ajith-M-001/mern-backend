const StudentFourthSem = require("../schema/studentSchema");
const ThirdSem = require("../schema/thirdSemSchema");
const FirstSem = require("../schema/FirstSemSchema");
const secondSem = require("../schema/secondSemSchema");



const getAllSemesterSGPA = async (req, res) => {
  try {
    const usn = req.params.usn;

    // Retrieve the data from the respective semesters
    const firstSemData = await FirstSem.findOne({ usn });
    const secondSemData = await secondSem.findOne({ usn });
    const thirdSemData = await ThirdSem.findOne({ usn });
    const fourthSemData = await StudentFourthSem.findOne({ usn });

    // Check if any of the semester data is missing
    if (
      !firstSemData ||
      !secondSemData ||
      !thirdSemData ||
      !fourthSemData ||
      !firstSemData.calculatedSGPA ||
      !secondSemData.calculatedSGPA ||
      !thirdSemData.calculatedSGPA ||
      !fourthSemData.calculatedSGPA ||
      !firstSemData.total ||
      !secondSemData.total ||
      !thirdSemData.total ||
      !fourthSemData.total
    ) {
      return res.status(400).json({
        error:
          'To calculate CGPA, you need to enter marks for "all 4 semesters." Please enter your marks first.',
      });
    }

    // ... rest of the code ...

    // Extract the total and calculatedSGPA values for each semester
    const firstSemTotal = firstSemData.total;
    const firstSemSGPA = firstSemData.calculatedSGPA;
    const secondSemTotal = secondSemData.total;
    const secondSemSGPA = secondSemData.calculatedSGPA;
    const thirdSemTotal = thirdSemData.total;
    const thirdSemSGPA = thirdSemData.calculatedSGPA;
    const fourthSemTotal = fourthSemData.total;
    const fourthSemSGPA = fourthSemData.calculatedSGPA;

    // Calculate the average SGPA
    const averageSGPA =
      (parseFloat(firstSemSGPA) +
        parseFloat(secondSemSGPA) +
        parseFloat(thirdSemSGPA) +
        parseFloat(fourthSemSGPA)) /
      4;

    // Calculate the total marks
    const totalMarks =
      firstSemTotal + secondSemTotal + thirdSemTotal + fourthSemTotal;
    // Calculate the percentage
    const percentage = (totalMarks / 2900) * 100;

    // Retrieve the name and gender from any of the semester data
    const name = firstSemData.name;
    const gender = firstSemData.gender;

    // Prepare the response object
    const response = {
      usn,
      name,
      gender,
      totalMarks,
      percentage: percentage.toFixed(2),
      averageSGPA: averageSGPA.toFixed(2),
    };

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



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
    const thirdSemData = await ThirdSem.find();

    const allData = [...thirdSemData];

    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error (or) database error" });
  }
};
const getFirstSemAllData = async (req, res) => {
  try {
    // Retrieve all data from the database

    const allData = [...firstSemData];

    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error (or) database error" });
  }
};
const getFourthSemAllData = async (req, res) => {
  try {
    // Retrieve all data from the database

    const fourthSemData = await StudentFourthSem.find();

    const allData = [...fourthSemData];

    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error (or) database error" });
  }
};
const getSecondSemAllData = async (req, res) => {
  try {
    // Retrieve all data from the database

    const secondSemData = await secondSem.find();

    const allData = [...secondSemData];

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
  getSecondSemAllData,
  getAllSemesterSGPA,
};
