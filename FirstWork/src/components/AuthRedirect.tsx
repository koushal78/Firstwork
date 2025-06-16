// AuthRedirect.tsx
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthRedirect = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  return <div>Redirecting to login...</div>;
};

export default AuthRedirect;
