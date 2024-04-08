import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../store/auth";

export const LogoutPage = () => {
  const { logoutUser } = useAuthContext();

  useEffect(() => {
    logoutUser();
  }, [logoutUser]);
  return <Navigate to="/login" />;
};
