import React from "react";

function Login({ isLoggedIn, setIsLoggedIn }) {
  function handleSubmit(event) {
    event.preventDefault();
    setIsLoggedIn(true);
  }
  if (isLoggedIn) {
    return <h2>Logged In Successfully!</h2>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
