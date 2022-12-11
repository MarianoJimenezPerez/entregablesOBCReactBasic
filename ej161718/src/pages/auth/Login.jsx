import React from "react";

const Login = ({ user }) => {
  return (
    <div>
      {user ? "You are logged" : "You are not logged, please press login"}
    </div>
  );
};

export default Login;
