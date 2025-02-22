import React from "react";
import { useRouter } from "next/router";

const ClientDashboard = () => {
  const router = useRouter();

  const logout = () => {
    // Logic to clear session or token can be added here.
    router.push("/client/login");
  };

  return (
    <div>
      <h2>Welcome to Your Dashboard</h2>
      <p>Your Case Details:</p>
      <ul>
        <li>Case #12345: Pending</li>
        <li>Attorney: John Doe</li>
        <li>Next Court Date: 25th Feb, 2025</li>
      </ul>
      <button onClick={() => router.push("/client/profile")}>
        Edit Profile
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ClientDashboard;
