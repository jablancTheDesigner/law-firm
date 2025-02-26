import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => (
  <FooterSection>
    <div className="container">
      <p>&copy; 2025 Black-Owned Law Firm. All Rights Reserved.</p>
    </div>
  </FooterSection>
);

export default Footer;
