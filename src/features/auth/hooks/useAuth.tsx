import { useState } from "react";
import useUser, { User } from "../../user/hooks/useUser";

export default function useAuth() {
  const { updateUser, clearUser } = useUser();
  const [isFetching, setIsFetch] = useState(false);

  async function signin(username: string, password: string) {
    const credentials = { username, password };
    const controller = new AbortController();
    const signal = controller.signal;
    setIsFetch(true);

    setTimeout(() => {
      controller.abort();
    }, 10000);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        signal,
      });

      const { user } = (await response.json()) as { user: User };

      if (response.ok) {
        updateUser(user);
      } else {
        throw new Error("user not found!");
      }
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") {
        alert("Your request has been aborted");
      } else if (e instanceof Error) {
        alert(e.message);
      }
    } finally {
      setIsFetch(false);
    }
  }

  function signout(cb?: () => void) {
    clearUser();
    if (cb) cb();
  }

  return { signin, signout, isFetching };
}
