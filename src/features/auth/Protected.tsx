import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUser from "../user/hooks/useUser";

function ProtectedPage({ element }: { element: ReactNode }) {
  const location = useLocation();
  const { user } = useUser();

  if (!user) {
    console.log("user logged out");
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
}

export default ProtectedPage;
