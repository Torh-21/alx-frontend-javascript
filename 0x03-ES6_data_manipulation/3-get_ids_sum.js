// The function getStudentIdsSum returns the sum of all the student ids

const getStudentIdsSum = (studList) => {
  const sum = studList.map((student) => student.id)
    .reduce((prev, current) => prev + current);

  return sum;
};

export default getStudentIdsSum;
