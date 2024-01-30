import React, { useContext, useState } from "react";
import { APIContext } from "../../api/api";
function Signup() {
  const { login, signup } = useContext(APIContext);
  const [email, setEmail] = useState("nimbolkarvivek56@gmail.com");
  const [password, setPassword] = useState("Password@12345");
  const [confirmPassword, setConfirmPassword] = useState("Password@12345");
  const [username, setUsername] = useState("vivek123");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signup(username, email, password)
      .then((res) => {
        console.log(res);
        alert("Signup successful");
      })
      .catch((err) => {
        console.log(err);
        alert("Signup failed");
      });
  };

  return (
    <>
      <div>Signup</div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Signup</button>
    </>
  );
}

export default Signup;
