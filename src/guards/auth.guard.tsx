import { Navigate } from "react-router-dom";
import { LoginGuardProps } from "./login.guard";
import { useSelector } from "react-redux";
import { StoreModel } from "../state/store";

const AuthGuard: React.FC<LoginGuardProps> = ({ Component }) => {
  const isLoggedIn = useSelector((state: StoreModel) => state.auth.token);
  return isLoggedIn ? <Component /> : <Navigate to="/auth/login" replace />;
};

export default AuthGuard;
