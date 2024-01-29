const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    try {
      const data = fs.readFileSync(path, 'utf8');

      // Split the data into rows
      const rows = data.trim().split('\n');

      // Initialize an object to store the count for each field
      const fieldCounts = {};

      // Iterate through each row starting from index 1
      for (let i = 1; i < rows.length; i++) {
        // Split the row into fields
        const [firstname, lastname, age, field] = rows[i].split(',');

        // Check if the row is not empty
        if (firstname && lastname && age && field) {
          // Increment the count for the field
          fieldCounts[field] = (fieldCounts[field] || 0) + 1;
        }
      }

      // Log the total number of valid students
      console.log(`Number of students: ${Object.values(fieldCounts).reduce((acc, count) => acc + count, 0)}`);

      // Log the number of students in each field
      for (const field in fieldCounts) {
        const count = fieldCounts[field];
        const studentsList = rows
          .slice(1) // Skip the header
          .filter((row) => row.split(',')[3] === field)
          .map((row) => row.split(',')[0]);
        console.log(`Number of students in ${field}: ${count}. List: ${studentsList.join(', ')}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
