// The groceriesList function returns a map of
// groceries with the following items (name, quantity)

const groceriesList = () => {
  const fruits = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return fruits;
};

export default groceriesList;
