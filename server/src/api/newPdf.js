import express from 'express';
import convertToPdf from '../pdf.js';

const router = express.Router();

router.post('/', async (req, res) => {
  // Get the student's details from the body
  const { name, state, city, major, zip } = req.body;

  // If any of the details are missing, respond with an error
  if (!name || !state || !city || !major || !zip) {
    res.status(400).json({ error: 'student details missing' });
    return;
  }

  // The name of the state must be 2 characters long, like "WB" or "PB"
  if (state.length !== 2) {
    res.status(400).json({ error: 'the state must be 2 characters long' });
    return;
  }

  // The full name must be provided
  if (!name.includes(' ')) {
    res.status(400).json({
      error:
        'please provide full name of the student where the first and last name must be separated with a space',
    });
    return;
  }

  // Get the proper full name and create a custom output destination
  const fullNameArr = name.split(' ');
  const fullName = `${fullNameArr[0]} ${fullNameArr[1]}`;
  const output = `./pdfs/${name}.pdf`;

  // Create the PDF
  const result = await convertToPdf(
    fullName,
    state,
    city,
    major,
    zip,
    output
  ).catch((err) => {
    res.status(500).json({ error: err });
    return;
  });

  res.status(201).send(result);
});

export default router;
