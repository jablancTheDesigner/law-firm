import React from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/appContext";

const ClientDashboard = () => {
  const {setIsSignedIn} = useAppContext();

  return (
    <div class="container">
      <h2>Welcome to Your Dashboard</h2>
      <p>Your Case Details:</p>
      <ul>
        <li>Case #12345: Pending</li>
        <li>Attorney: John Doe</li>
        <li>Next Court Date: 25th Feb, 2025</li>
      </ul>
    </div>
  );
};

export default ClientDashboard;
