import React, { useState } from "react";
import styled from "styled-components";
import FormStepOne from "./FormStepOne";
import FormStepThree from "./FormStepThree";
import FormStepTwo from "./FormStepTwo";
import { FormInput, StepOneInput, StepTwoInput } from "./FormType";

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
  const [stepOneData, setStepOneData] = useState<StepOneInput>({
    firstName: "",
    surName: "",
    email: "",
  });
  const [stepTwoData, setStepTwoData] = useState<StepTwoInput>({
    phoneNumber: "",
    gender: "",
    year: "",
    month: "",
    day: "",
  });
  const [comments, setComments] = useState<string>("");
  const [toggle1, setToggle1] = useState<boolean>(true);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);

  const submitStepOne = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(
      `${stepOneData.firstName}, ${stepOneData.surName}, ${stepOneData.email}`
    );
  };
  const submitStepTwo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(
      `${stepOneData.firstName}, ${stepOneData.surName}, ${stepOneData.email}`
    );
    console.log(
      `${stepTwoData.phoneNumber}, ${stepTwoData.gender}, ${stepTwoData.year}-${stepTwoData.month}-${stepTwoData.day}`
    );
  };
  const submitFormData = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formInput: FormInput = {
      ...stepOneData,
      ...stepTwoData,
      comments,
    };
    console.log(formInput);
  };

  return (
    <Container>
      <FormStepOne
        toggleHandler={() => setToggle1((prevToggle) => !prevToggle)}
        submitHandler={submitStepOne}
        toggle={toggle1}
        onStepOneChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStepOneData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
          }))
        }
        stepOneData={stepOneData}
      />
      <FormStepTwo
        toggleHandler={() => setToggle2((prevToggle) => !prevToggle)}
        submitHandler={submitStepTwo}
        toggle={toggle2}
        onStepTwoChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) =>
          setStepTwoData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
          }))
        }
        stepTwoData={stepTwoData}
      />
      <FormStepThree
        toggleHandler={() => setToggle3((prevToggle) => !prevToggle)}
        submitHandler={submitFormData}
        toggle={toggle3}
        onCommentsChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setComments(event.target.value)
        }
        commentsValue={comments}
      />
    </Container>
  );
};

export default FormContainer;
