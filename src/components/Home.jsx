import React, { useContext } from "react";
import { UserContext } from "../App";

const Home = () => {

  let {users} = useContext(UserContext);
  console.log(users);

  return users ? (
    <ul>
      {users.map((user, index) => {
        return <li key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.username}</p>
        </li>
      })}
    </ul>
  ) : <h1 className="text-color-red  text-bold">loading...</h1>
};

export default Home;
