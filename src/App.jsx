import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

const App = () => {
  
  const [users, setusers] = useState(null);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(data);
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( () => {
    getUsers();
  }, [])

  return (

    <UserContext.Provider value={{users, setusers}}>

    

    <div className="w-[80%] bg-zinc-200 mt-5 mx-auto p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </div>
    </UserContext.Provider>
  );
};

export default App;
