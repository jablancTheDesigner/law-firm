import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials (In production, replace this with actual authentication)
  const validEmail = "client@example.com";
  const validPassword = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      setError("");
      router.push("/client/portal");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div id="client-login">
      <h2>Client Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

       <div>
        <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
       </div>

       <div>
        <p>Test username: {validEmail}</p>
        <p>Test password: {validPassword}</p>
       </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
