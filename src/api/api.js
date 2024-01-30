import axios from "axios";
import { createContext } from "react";

const APIContext = createContext();
const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL);

// HANDLE USER LOGIN
function login(username, password) {
  const endpoint = "/auth/login";
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + endpoint, { username, password })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

// handle user signup
function signup(username, email, password) {
  const endpoint = "/auth/signup";
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + endpoint, { username, email, password })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function APIProvider({ children }) {
  return (
    <APIContext.Provider value={{ login, signup }}>
      {children}
    </APIContext.Provider>
  );
}

export { APIContext, APIProvider };
