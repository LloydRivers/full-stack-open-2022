import { useState, useEffect } from "react";
import { Filter, PersonForm } from "./components";

import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");
  const [reRender, setReRender] = useState(false);

  const getData = async () => {
    try {
      const response = await personServices.getAllPersons();
      setPersons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    setReRender(false);
  }, [reRender]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: number,
    };
    const isPresent = persons.filter(
      (person) => person.name === newPerson.name
    );

    if (isPresent.length) {
      console.log(isPresent.length);
      if (
        window.confirm(
          `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        try {
          await personServices.updatePerson(isPresent[0].id, newPerson);
          setReRender(true);
          setNewName("");
          setNumber("");
        } catch (error) {
          console.log(error);
        }
      } else {
        setNewName("");
        setNumber("");
      }
    } else {
      try {
        await personServices.createPerson(newPerson);
        setNewName("");
        setNumber("");
        setReRender(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        `Delete ${persons.find((person) => person.id === id).name}?`
      )
    ) {
      try {
        await personServices.deletePerson(id);

        setReRender(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
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
            <div key={index + 1}>
              <h3>
                {person.name} {person.number}
              </h3>
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default App;
