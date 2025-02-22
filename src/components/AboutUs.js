import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 50px 20px;
  background: #333;
  color: white;
  text-align: center;
`;

const AboutTitle = styled.h2`
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
`;

const AboutUs = () => (
  <AboutSection>
    <AboutTitle>About Us</AboutTitle>
    <AboutText>
      We are a Black-owned law firm committed to providing high-quality legal services. We strive to make
      justice accessible to everyone, regardless of their background. Our team of passionate lawyers is here
      to guide you through legal challenges with care and expertise.
    </AboutText>
  </AboutSection>
);

export default AboutUs;
