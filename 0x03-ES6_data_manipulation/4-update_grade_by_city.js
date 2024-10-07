// Helper function to validate input
function isValidInput(arrayOfStudentObjects, newGrades) {
  return (
    Array.isArray(arrayOfStudentObjects)
    && arrayOfStudentObjects.every((item) => typeof item === 'object'
    && item !== null) && Array.isArray(newGrades)
    && newGrades.every((item) => typeof item === 'object' && item !== null)
  );
}

export default function updateStudentGradeByCity(arrayOfStudentObjects, city, newGrades) {
  // Validate inputs
  if (!isValidInput(arrayOfStudentObjects, newGrades)) {
    return [];
  }

  // Create a new array with updated grades
  return arrayOfStudentObjects
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the corresponding grade for the student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // Return a new student object with the updated grade
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
