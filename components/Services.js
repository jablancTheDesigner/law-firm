import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 50px 20px;
  background: #f4f4f4;
  text-align: center;
`;

const ServiceCards = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  flex: 1;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 15px;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #555;
`;

const Services = () => (
  <ServicesSection>
    <div className="container">
      <h2>Our Legal Services</h2>
      <ServiceCards>
        <ServiceCard>
          <ServiceTitle>Business Law</ServiceTitle>
          <ServiceDescription>Legal advice and services for your growing business.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Criminal Defense</ServiceTitle>
          <ServiceDescription>Protecting your rights and defending you in criminal cases.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Family Law</ServiceTitle>
          <ServiceDescription>Guidance and support for family-related legal matters.</ServiceDescription>
        </ServiceCard>
      </ServiceCards>
    </div>
  </ServicesSection>
);

export default Services;
