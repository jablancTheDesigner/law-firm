import React from "react";
import { useRouter } from "next/router";

const ClientPortalLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <header>
        <h1>Black-Owned Law Firm - Client Portal</h1>
        <nav>
          <button onClick={() => router.push("/client/portal")}>Dashboard</button>
          <button onClick={() => router.push("/client/profile")}>Profile</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default ClientPortalLayout;
