export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((obj) => obj.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((score) => score.studentId === student.id);
      return {
        ...student,
        grade: matchingGrade ? matchingGrade.grade : 'N/A',
      };
    });
}
