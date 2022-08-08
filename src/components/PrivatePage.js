import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const SEC = 1000;
const MIN_10 = SEC * 60 * 10;

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    if (localStorage.getItem("USER") === null) {
      alert("faça login");
      return <Navigate to="/" />;
    }
  }, [navigate, auth.timestamp, auth.token, children]);

  if (!auth) {
    alert("faça login");
    return <Navigate to="/" />;
  }

  const now = +new Date();
  const timeLogged = auth.timestamp;

  if (now - timeLogged <= MIN_10) {
    return <>{children}</>;
  } else {
    localStorage.clear("USER");
    return <Navigate to="/" />;
  }
}
