import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");

  console.log(search);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: number,
    };
    const isPresent = persons.filter(
      (element) => element.name === newPerson.name
    );

    if (isPresent.length) {
      alert(`${newPerson.name} is already added to the phonebook`);
    } else {
      return setPersons([...persons, newPerson]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input onChange={(e) => setSearch(e.target.value)} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) => {
          return person.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((person, index) => {
          return (
            <h3 key={index + 1}>
              {person.name} {person.number}
            </h3>
          );
        })}
    </div>
  );
};

export default App;

// create express app
// create express router
