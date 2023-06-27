const express = require("express");
const router = express.Router();
const {
  addFourthSemStudentMarks,
  addThirdSemStudentMarks,
  addFirstSemStudentMarks,
  addSecondSemStudentMarks,
  getThirdSemAllData,
  getFourthSemAllData,
  getFirstSemAllData,
  getSecondSemAllData,
} = require("../controllers/student_comtroller");

router.post("/4thsem/add", addFourthSemStudentMarks);
router.post("/3rdsem/add", addThirdSemStudentMarks);
router.post("/1stsem/add", addFirstSemStudentMarks);
router.post("/2ndsem/add", addSecondSemStudentMarks);
router.get("/thirdsem/all", getThirdSemAllData);
router.get("/fourthsem/all", getFourthSemAllData);
router.get("/firstsem/all", getFirstSemAllData);
router.get("/secondsem/all", getSecondSemAllData);

module.exports = router;
