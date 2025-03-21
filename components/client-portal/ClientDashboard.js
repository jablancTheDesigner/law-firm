import React from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/appContext";
import Button from '@mui/material/Button';

const ClientDashboard = () => {
  const {setIsSignedIn} = useAppContext();
  const router = useRouter();

  const logout = () => {
    // Logic to clear session or token can be added here.
    setIsSignedIn(false);
    router.push("/client/login");
  };

  return (
    <div class="container">
      <h2>Welcome to Your Dashboard</h2>
      <p>Your Case Details:</p>
      <ul>
        <li>Case #12345: Pending</li>
        <li>Attorney: John Doe</li>
        <li>Next Court Date: 25th Feb, 2025</li>
      </ul>
      <Button onClick={() => router.push("/client/profile")} variant="contained">
        Edit Profile
      </Button>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default ClientDashboard;
