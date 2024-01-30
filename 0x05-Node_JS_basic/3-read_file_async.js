const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const rows = data.trim().split('\n');
        const fieldCounts = {};

        for (let i = 1; i < rows.length; i += 1) {
          const [firstname, lastname, age, field] = rows[i].split(',');

          if (firstname && lastname && age && field) {
            if (fieldCounts[field]) {
              // If the field already exists in fieldCounts, increment the count by 1
              fieldCounts[field] += 1;
            } else {
              // If the field doesn't exist in fieldCounts, initialize the count to 1
              fieldCounts[field] = 1;
            }
          }
        }

        console.log(`Number of students: ${rows.length - 1}`); // subtracting 1 for the header

        for (const field in fieldCounts) {
          if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
            const count = fieldCounts[field];
            const studentsList = rows
              .slice(1) // Skipping the header
              .filter((row) => row.split(',')[3] === field)
              .map((row) => row.split(',')[0]);
            console.log(`Number of students in ${field}: ${count}. List: ${studentsList.join(', ')}`);
          }
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
