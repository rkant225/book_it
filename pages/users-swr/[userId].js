import { useRouter } from "next/router";
import React from "react";
// import

const User = ({ user }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div>Name : {user?.name}</div>
      <div>Email : {user?.email}</div>
      <div>User Name : {user?.username}</div>
      <div>Website : {user?.website}</div>
    </div>
  );
};

export default User;

export const getStaticProps = async (context) => {
  const { userId } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();

  if (!user?.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: user,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
      { params: { userId: "4" } },
    ],
    fallback: true,
  };
};
