import Link from "next/link";
import React from "react";

const User = ({ user }) => {
  return (
    <div style={{ marginBottom: ".5rem" }}>
      <span>{user?.name}</span> | <span>{user?.email}</span> |{" "}
      <span style={{color: "orange"}}>
        <Link href={`/users/${user?.id}`}>View User</Link>
      </span>
    </div>
  );
};

export default User;
