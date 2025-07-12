import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children , redirectTo="/signin"}) => {
  const { isLoggedIn , isLoading} = useAuth();

    if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}