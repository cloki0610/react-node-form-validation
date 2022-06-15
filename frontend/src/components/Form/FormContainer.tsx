import React, { useState } from "react";
import styled from "styled-components";
import FormStepOne from "./FormStepOne";
import FormStepThree from "./FormStepThree";
import FormStepTwo from "./FormStepTwo";
import { FormInput } from "./FormType";

const initFormInputState = {
  firstName: "",
  surName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  year: "",
  month: "",
  day: "",
  comments: "",
};

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
  const [formData, setFormData] = useState<FormInput>(initFormInputState);
  const [toggle1, setToggle1] = useState<boolean>(true);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);

  return (
    <Container>
      <FormStepOne
        onToggle={() => setToggle1((prevToggle) => !prevToggle)}
        onSubmit={() => {}}
        toggle={toggle1}
      />
      <FormStepTwo
        onToggle={() => setToggle2((prevToggle) => !prevToggle)}
        onSubmit={() => {}}
        toggle={toggle2}
      />
      <FormStepThree
        onToggle={() => setToggle3((prevToggle) => !prevToggle)}
        onSubmit={() => {}}
        toggle={toggle3}
      />
    </Container>
  );
};

export default FormContainer;
