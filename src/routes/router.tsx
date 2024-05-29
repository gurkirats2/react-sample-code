import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import AuthCommon from "../pages/auth/common";
import { StoreModel } from "../state/store";
import { useSelector } from "react-redux";
import LoginGuard from "../guards/login.guard";
import Login from "../pages/auth/login";
// import Forgot from "../pages/auth/forgot";
// import Verify from "../pages/auth/verify";
import AuthLayout from "../pages/main/AuthLayout";
import { ROUTING } from "../enum/router.enum";

const Routing = () => {
  const isAuthenticated = useSelector((state: StoreModel) => state.auth.token);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Navigate to={`${ROUTING.AUTH}/${ROUTING.LOGIN}`} replace />
            ) : (
              <Navigate to={`${ROUTING.CORE}`} replace />
            )
          }
        />
        {/* auth routes */}
        <Route path={ROUTING.AUTH} element={<LoginGuard Component={AuthCommon} />}>
          <Route path={ROUTING.LOGIN} element={<Login />} />
          {/* <Route path="forgot" element={<Forgot />} />
          <Route path="verify" element={<Verify />} /> */}
        </Route>

        <Route path={ROUTING.CORE} element={<AuthLayout/>}></Route>
      </Routes>
    </Router>
  );
};

export default Routing;
