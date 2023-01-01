import React from "react";
import User from "../../components/Users/User";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

const UsersList = () => {
  const { data, error } = useSWR("users-swr", fetcher);

  return (
    <div>
      {data?.map((user) => {
        return <User key={user?.id} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
