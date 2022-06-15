import React from "react";
import styled from "styled-components";

type CardProps = {
  children: React.ReactNode;
};

const Card = styled.div`
  background-color: lightgray;
  border-radius: 8px;
`;

const FormBody: React.FC<CardProps> = ({ children }) => {
  return <Card>{children}</Card>;
};

export default FormBody;
