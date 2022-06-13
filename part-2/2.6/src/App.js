import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
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
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return <h3 key={index + 1}>{person.name}</h3>;
      })}
    </div>
  );
};

export default App;

// create express app
// create express router
