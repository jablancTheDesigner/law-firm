import React from "react";
import styled from "styled-components";

const TestimonialsSection = styled.section`
  padding: 50px 20px;
  background: #fff;
  text-align: center;
`;

const TestimonialCard = styled.div`
  background: #f0f0f0;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ClientName = styled.h4`
  color: #333;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #555;
`;

const Testimonials = () => (
  <TestimonialsSection>
    <div className="container">
      <h2>What Our Clients Say</h2>
      <TestimonialCard>
        <TestimonialText>"The team was professional, compassionate, and helped me through a tough time." </TestimonialText>
        <ClientName>- John Doe</ClientName>
      </TestimonialCard>
      <TestimonialCard>
        <TestimonialText>"I highly recommend them! They helped me win my case." </TestimonialText>
        <ClientName>- Jane Smith</ClientName>
      </TestimonialCard>
    </div>
  </TestimonialsSection>
);

export default Testimonials;
