import React, { useContext } from "react";
import { UserContextData } from "../utils/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  let { users } = useContext(UserContextData);

  return users ? (
    <ul>
      {users.map((user, index) => {
        return (
          <li key={user.id} className="list-disc mb-3">
            <Link to={`/users/${user.id}`}>
              <span className="text-2xl text-blue-300 hover:text-blue-600">{user.name}</span> 
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <h1 className="text-red text-3xl text-center">loading...</h1>
  );
};

export default Home;
