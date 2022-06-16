import { useState, useEffect } from "react";
import { Filter, PersonForm, Notification } from "./components";

import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");
  const [reRender, setReRender] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [addedPersonsName, setAddedPersonsName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
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
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setAddedPersonsName("");
    }, 4000);
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: number,
    };
    const isPresent = persons.find((person) => person.name === newPerson.name);

    if (isPresent) {
      if (
        window.confirm(
          `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        try {
          await personServices.updatePerson(isPresent.id, newPerson);
          setReRender(true);
          setNewName("");
          setNumber("");
        } catch (error) {
          setErrorMessage(
            `Person '${newPerson.name}' was already removed from server`
          );
          console.log(error);
        }
      } else {
        setNewName("");
        setNumber("");
      }
    } else {
      try {
        await personServices.createPerson(newPerson);
        setAddedPersonsName(newPerson.name);
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
      window.confirm(`Delete ${persons.find((person) => person.id === id)}?`)
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
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      {isAdded && (
        <p
          style={{
            color: "#fff",
            fontSize: "1.1rem",
            border: "1px solid #3A9438",
            backgroundColor: "grey",
          }}
        >
          Added {addedPersonsName} to the phonebook
        </p>
      )}
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
