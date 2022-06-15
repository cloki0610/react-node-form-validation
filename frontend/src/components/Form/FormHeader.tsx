import React from "react";
import styled from "styled-components";

const Header = styled.div`
  padding: 5px 0;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  background: linear-gradient(#fdc830, #f37335);

  & h1 {
    color: #ffffff;
    font-size: 14px;
    margin: 15px;
  }
`;

const FormHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  );
};

export default FormHeader;
