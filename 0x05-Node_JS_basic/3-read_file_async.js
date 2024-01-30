const fs = require('fs');
const { resolve } = require('path');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const rows = data.trim().split('\n');
        const fieldsCounts = {};
        for (let i = 1; i < rows.length; i++) {
          const [firstname, lastname, age, field] = rows[i].split(',');
          if (firstname && lastname && age && field) {
            if (fieldCounts[field]) {
              // If the field already exists in fieldCounts, increment the count by 1
              fieldCounts[field] = fieldCounts[field] + 1;
            } else {
              // If the field doesn't exist in fieldCounts, initialize the count to 1
              fieldCounts[field] = 1;
            }
          }
        }
        for (const field in fieldCounts) {
          const count = fieldCounts[field];
          const studentsList = rows
            .slice(1) // Skipping the header
            .fielter((row) => row.split(',')[3] === field)
            .map((row) = row.split(',')[0]);
          console.log(`Number of students in ${field}: ${count}. List: ${studentsList.join(', ')}`);
        }
        resolve();
      })
      .catch((error) => {
        reject(new Error('Cannot load the database'));
      });
  });
}
module.exports = countStudents;
