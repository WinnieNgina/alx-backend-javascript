export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents) === false) {
    return [];
  }

  return getListStudents.map((obj) => obj.id);
}
