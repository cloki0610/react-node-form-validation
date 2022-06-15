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
  const [stepOneData, setStepOneData] = useState();
  const [stepTwoData, setStepTwoData] = useState();
  const [formData, setFormData] = useState<FormInput>(initFormInputState);
  const [toggle1, setToggle1] = useState<boolean>(true);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);

  const submitStepOne = () => {};
  const submitStepTwo = () => {};
  const submitFormData = () => {};

  return (
    <Container>
      <FormStepOne
        toggleHandler={() => setToggle1((prevToggle) => !prevToggle)}
        submitHandler={submitStepOne}
        toggle={toggle1}
      />
      <FormStepTwo
        toggleHandler={() => setToggle2((prevToggle) => !prevToggle)}
        submitHandler={submitStepTwo}
        toggle={toggle2}
      />
      <FormStepThree
        toggleHandler={() => setToggle3((prevToggle) => !prevToggle)}
        submitHandler={submitFormData}
        toggle={toggle3}
      />
    </Container>
  );
};

export default FormContainer;
