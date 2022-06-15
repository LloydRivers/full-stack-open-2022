import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAllPersons = () => {
  return axios.get(baseURL);
};

const createPerson = (newObject) => {
  return axios.post(baseURL, newObject);
};

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};
const updatePerson = (id, newObject) => {
  return axios.put(`${baseURL}/${id}`, newObject);
};
export default {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
};
