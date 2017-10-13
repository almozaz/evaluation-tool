export default (result) => {

  function randomGrade(){
    const grades = [1, 1, 1, 2, 2, 3]
    return grades[Math.floor((Math.random() * 6) + 1)]
  };
  function filterStudents(){
    const grade = randomGrade()

    const students = result.data.filter(function(student){
      if (student["evaluations"] == undefined) return true
      if (student.evaluations.length > 1){
        return student.evaluations[student.evaluations.length - 1].grade === grade
      }
      return student.evaluations.grade === grade
    })
    if (students.length !== 0) return students[Math.floor(Math.random() * students.length)]

    return filterStudents()
  }

  const student = filterStudents()

  return student
}
