import { useState } from "react";
import { Filter, PersonForm } from "./components";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");

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
      setNewName("");
      setNumber("");
    } else {
      setPersons([...persons, newPerson]);
    }
    setNewName("");
    setNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearch={setSearch} />
      <PersonForm
        newName={newName}
        number={number}
        setNumber={setNumber}
        handleSubmit={handleSubmit}
        setNewName={setNewName}
      />

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
