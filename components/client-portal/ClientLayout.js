import React from "react";
import Nav from "../Nav";
import { useAppContext } from "../../context/appContext";

const ClientPortalLayout = ({ children }) => {
  const {brandName} = useAppContext();
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="container" style={{textAlign: "center"}}>
        <h2>{brandName} - Client Portal</h2>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default ClientPortalLayout;
