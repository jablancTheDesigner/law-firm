import React, { useState } from "react";
import { useRouter } from "next/router";

const ClientProfile = () => {
  const router = useRouter();
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("client@example.com");

  const handleSave = () => {
    // Logic to save the updated information can be added here
    alert("Profile updated!");
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="button" onClick={handleSave}>
          Save Changes
        </button>
      </form>
      <button onClick={() => router.push("/client/portal")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ClientProfile;
