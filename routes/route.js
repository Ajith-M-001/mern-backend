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

router.post("/api/4thsem/add", addFourthSemStudentMarks);
router.post("/api/3rdsem/add", addThirdSemStudentMarks);
router.post("/api/1stsem/add", addFirstSemStudentMarks);
router.post("/api/2ndsem/add", addSecondSemStudentMarks);
router.get("/api/thirdsem/all", getThirdSemAllData);
router.get("/api/fourthsem/all", getFourthSemAllData);
router.get("/api/firstsem/all", getFirstSemAllData);
router.get("/api/secondsem/all", getSecondSemAllData);

module.exports = router;
