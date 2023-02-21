import fs from 'fs-extra';

/**
 * Function that loads the "address.json" and returns the Javascript version
 * of the JSON
 */
const getStudentsJson = async () => {
  const json = await fs.readJson('./address.json');
  return json;
};

const StudentsData = await getStudentsJson();

export default StudentsData;
