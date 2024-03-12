// The function getListStudentIds returns an array of ids from a list of object

const getListStudentsIds = (objlist) => {
  if (!Array.isArray(objlist)) {
    return [];
  }

  const idarray = objlist.map((obj) => obj.id);

  return idarray;
};

export default getListStudentsIds;
