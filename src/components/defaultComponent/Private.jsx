import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const email = localStorage.getItem("userEmail");

  console.log(email);

  if (email) {
    return children;
  }

  return (
    <Navigate state={{ from: location.pathname }} to={`/`} replace={true} />
  );
}
