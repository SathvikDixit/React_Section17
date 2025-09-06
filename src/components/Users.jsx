import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../App";

const Users = () => {
  const { id } = useParams();
  let { users } = useContext(UserContext);
  let user = users.find((user) => user.id === +id);
  console.log(user);

  return users ? (
    <div>
      <h1>Name: {user.name}</h1>
      <p> User name: {user.username}</p>
      <p>E-mail: {user.email}</p>
      <p>Address: {user.address.street}</p>
      <p>website: {user.website}</p>
      <p>Company name: {user.company.name}</p>
      <br />
      <hr /><br />
      <Link to='/' className="text-blue-600 text-white mx-3 my-1 rounded-md">Back</Link>

    </div>
  ) : (
    <h1 className="text-red text-3xl text-center">loading...</h1>
  );
};

export default Users;
