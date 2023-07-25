import { Redirect, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import App from "../App";
import AuthContext from "../../contexts/AuthContext";
import { URLLogin } from "../../services/urls";
import { getLocalStorage, postTokenVerification } from "../../services/auth";

export const PrivateRoute = () => {
  const { setUserInfo } = useContext(AuthContext);
  const { setVerifiedToken } = useContext(AuthContext);

  const localStorageAuthI = getLocalStorage();
  const { isLogged, isAuthenticated, user } = localStorageAuthI;
  const token = user.token;

  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const verifyAuthentication = async () => {
      if (isLogged && isAuthenticated) {
        try {
          const res = await postTokenVerification(token);

          setUserInfo(res.data);
          setVerifiedToken(token);
          setShouldRedirect(false);
        } catch (err) {
          console.log(err);
        }
      } else {
        setShouldRedirect(true);
      }
    };

    verifyAuthentication();
  }, [isLogged, isAuthenticated, token, setUserInfo, setVerifiedToken]);

  if (shouldRedirect) {
    return (
      <>
        <Redirect to={URLLogin} />
        {window.location.reload()}
      </>
    );
  }

  return <Route render={() => <App />} />;
};