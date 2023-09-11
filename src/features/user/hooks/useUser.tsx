import { useQuery, useQueryClient } from "@tanstack/react-query";
import queryKeys from "../../../react-query/constant";
import { useNavigate } from "react-router-dom";

export interface User {
  id: string;
  username: string;
  password: string;
}

interface UserReturnType {
  user: User;
}

interface IUseUser {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

function getInitialData() {
  const userString = sessionStorage.getItem("user") as string | null;
  if (!userString) return null;
  const user = JSON.parse(userString) as User;
  return user;
}

const fetchUser = async (inputUser: User | null | undefined) => {
  if (!inputUser) return null;
  const response = await fetch(`http://localhost:3000/user/${inputUser.id}`, {
    method: "GET",
  });
  const { user } = (await response.json()) as UserReturnType;
  return user;
};

export function useUser(): IUseUser {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const { data: user } = useQuery({
    queryKey: [queryKeys.user],
    queryFn: async (): Promise<User | null> => fetchUser(user),
    initialData: getInitialData,
  });

  function updateUser(newUser: User) {
    qc.setQueryData(["user"], newUser);
    sessionStorage.setItem("user", JSON.stringify(newUser));
  }

  function clearUser() {
    qc.setQueryData(["user"], null);
    sessionStorage.removeItem("user");
    navigate("/login");
  }

  return {
    user: user ?? null,
    updateUser,
    clearUser,
  };
}

export default useUser;
