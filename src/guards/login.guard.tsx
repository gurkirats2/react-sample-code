import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { StoreModel } from "../state/store";

const LoginGuard: React.FC<LoginGuardProps> = ({ Component }) => {
  const isLoggedIn = useSelector((state: StoreModel) => state.auth.token);
  return !isLoggedIn ? <Component /> : <Navigate to="/core" replace />;
};

export default LoginGuard;

export interface LoginGuardProps {
  Component: React.FC<any>;
}
