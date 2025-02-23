import React from "react";
import Nav from "../Nav";

const ClientPortalLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <h2>Black-Owned Law Firm - Client Portal</h2>
      <main>{children}</main>
    </div>
  );
};

export default ClientPortalLayout;
