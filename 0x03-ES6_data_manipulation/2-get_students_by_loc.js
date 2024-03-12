// The function getStudentsByLocation returns an array of objects who are located in a specific city

const getStudentsByLocation = (studList, city) => {
  const objArray = studList.filter((student) => student.location === city);

  return objArray;
};

export default getStudentsByLocation;
