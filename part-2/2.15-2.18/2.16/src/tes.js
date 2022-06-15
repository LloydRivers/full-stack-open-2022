const arr = [
  { name: "Arto Hellas" },
  { name: "Jimmy Hellas" },
  { name: "Jonny Hellas" },
];

// When this is the object argument, isPresent will be an empty array and have a length of 0
const notInThere = {
  name: "Terry Fandango",
};
// When this is the object argument, isPresent will the array filled with the goodies and have a length of > 0
const inthere = {
  name: "Arto Hellas",
};

// true or false
// returns a new array
//

const testArray = (arr, obj) => {
  const isPresent = arr.filter((element) => element.name === obj.name);

  // If the we have a match the name is already inside of the array, isPresent is going to have an element inside
  // else, it is not inside the array, isPresent will be an empty array

  // What do you need to check now?

  if (isPresent.length) {
    return arr;
  } else {
    return [...arr, obj];
  }
};
console.log(testArray(arr, inthere));
console.log(testArray(arr, notInThere));

const persons = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const searchTerm = {
  name: "Arto Hellas",
};

const filter = persons.filter((person) => person.name === searchTerm.name);
