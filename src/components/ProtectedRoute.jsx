import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  return localStorage.getItem("userId") ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;

