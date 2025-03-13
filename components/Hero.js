import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background: #333;
  color: white;
  padding: 100px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const HeroButton = styled.button`
  background-color: #ff5722;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e64a19;
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroTitle>Empowering Your Legal Rights</HeroTitle>
    <HeroSubtitle>Providing trusted legal services with integrity, excellence, and dedication.</HeroSubtitle>
    <HeroButton>Get a Free Consultation</HeroButton>
  </HeroSection>
);

export default Hero;
