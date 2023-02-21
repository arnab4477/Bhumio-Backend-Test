import express from 'express';
import StudentsData from '../../data.js';

const router = express.Router();

router.get('/', async (req, res) => {
  // Get the query parameters (if any)
  const { name, city, state, major, zip } = req.query;

  // If no query parameter is provided, return all students
  if (!name && !city && !state && !major && !zip) {
    res.status(200).json(StudentsData.Students);
    return;
  }

  // Filter the students based on the query parameters
  const filteredStudents = StudentsData.Students.filter((student) => {
    // boolean values for each queries that would be turned to true if the
    // specific query is satisfied
    let includesName = false;
    let includesCity = false;
    let includesState = false;
    let includesMajor = false;
    let includesZip = false;

    if (!name || student.Name.toLowerCase().includes(name.toLowerCase())) {
      includesName = true;
    }
    if (!city || student.address.city.toLowerCase() === city.toLowerCase()) {
      includesCity = true;
    }
    if (!state || student.address.state.toLowerCase() === state.toLowerCase()) {
      includesState = true;
    }
    if (!major || student.Major.toLowerCase() === major.toLowerCase()) {
      includesMajor = true;
    }
    if (!zip || student.address.zip === zip.toLowerCase()) {
      includesZip = true;
    }

    // If a student satisfies all the provided queries then they should be returned
    // else they should be excluded
    if (
      includesName &&
      includesCity &&
      includesState &&
      includesMajor &&
      includesZip
    ) {
      return true;
    }
    return false;
  });

  if (filteredStudents.length > 0) {
    res.status(200).json(filteredStudents);
  } else {
    // If no students match the queries, return a 404 error
    res.status(404).json({ error: 'no matching students found' });
  }
});

export default router;
