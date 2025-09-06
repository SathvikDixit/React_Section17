import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const UserContextData = createContext(null);

const UserContext = (props) => {
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
    <UserContextData.Provider value={{ users }}>
      {props.children}
    </UserContextData.Provider>
  );
}

export default UserContext;