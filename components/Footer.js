import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const FooterSection = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  const {brandName} = useAppContext();
  return (
    <FooterSection>
      <div className="container">
        <p>&copy; 2025 {brandName}. All Rights Reserved.</p>
      </div>
    </FooterSection>
  )
};

export default Footer;
