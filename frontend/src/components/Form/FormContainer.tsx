import React from "react";
import styled from "styled-components";
import FormStepOne from "./FormStepOne";
import FormStepThree from "./FormStepThree";
import FormStepTwo from "./FormStepTwo";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1 0;
  gap: 5px;
  padding: 5px;
  border-radius: 8px;
  background-color: #ffffff;
  width: 600px;
  height: auto;
`;

const FormContainer: React.FC = () => {
  return (
    <Container>
      <FormStepOne />
      <FormStepTwo />
      <FormStepThree />
    </Container>
  );
};

export default FormContainer;
