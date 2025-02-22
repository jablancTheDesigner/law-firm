import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials (In production, replace this with actual authentication)
    const validEmail = "client@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      setError("");
      router.push("/client/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Client Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
