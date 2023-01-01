import React from "react";
import User from "../../components/Users/User";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <User key={user?.id} user={user} />;
      })}
    </div>
  );
};

export default UsersList;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users: users,
    },
  };
};
