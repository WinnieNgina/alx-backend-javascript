export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (departmentIndex < departments.length) {
        const employees = departments[departmentIndex];
        if (employeeIndex < employees.length) {
          const result = { value: employees[employeeIndex], done: false };
	  employeeIndex += 1;
          return result;
        }
        // move to the next department
        departmentIndex += 1;
        employeeIndex = 0;
        return this.next(); // Recursively call next for the next department
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
