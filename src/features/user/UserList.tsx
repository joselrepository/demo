import React from "react";
import { useAppSelector } from "../../hooks/hooks";

function UserList() {
  const { data } = useAppSelector((state) => state.user);
  return <div>{JSON.stringify(data)}</div>;
}

export default UserList;
