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
  const [stepOneError, setStepOneError] = useState<string>("");
  const [stepTwoError, setStepTwoError] = useState<string>("");
  const [stepThreeError, setStepThreeError] = useState<string>("");
  const [toggle1, setToggle1] = useState<boolean>(true);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);

  const validateStepOne: () => boolean = () => {
    const { firstName, surName, email } = stepOneData;
    if (firstName.trim().length < 3 || firstName.trim().match(/\d+/g)) {
      setStepOneError("First Name is invalid, please check and try again.");
      return false;
    }
    if (surName.trim().length < 3 || surName.trim().match(/\d+/g)) {
      setStepOneError("Surname is invalid, please check and try again.");
      return false;
    }
    if (!email.includes("@") || email.trim().length < 14) {
      setStepOneError("E-mail is invalid, please check and try again.");
      return false;
    }
    return true;
  };

  const validateStepTwo: () => boolean = () => {
    const { phoneNumber, gender, year, month, day } = stepTwoData;
    if (phoneNumber.trim().length < 8 || phoneNumber.trim().match(/\D+/g)) {
      setStepTwoError("Phone Number is Invalid, please check and try again.");
      return false;
    }
    if (gender === "") {
      setStepTwoError("Please select gender.");
      return false;
    }
    if (
      year.trim().length !== 4 ||
      month.trim().length !== 2 ||
      day.trim().length !== 2 ||
      +year > 2022 ||
      +year < 1900 ||
      +month < 1 ||
      +month > 12 ||
      +day < 1 ||
      +day > 31 ||
      year.trim().match(/\D+/g) ||
      month.trim().match(/\D+/g) ||
      day.trim().match(/\D+/g)
    ) {
      setStepTwoError("Invalid Date of Birth, please check and try again.");
      return false;
    }
    return true;
  };

  const submitStepOne = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const validate1 = validateStepOne();
    if (!validate1) {
      setToggle1(true);
      return;
    }
    setStepOneError("");
    setToggle1(false);
    setToggle2(true);
    setToggle3(false);
  };
  const submitStepTwo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const validate1 = validateStepOne();
    const validate2 = validateStepTwo();
    if (!validate1) {
      setToggle1(true);
      return;
    }
    if (!validate2) {
      setToggle2(true);
      return;
    }
    setStepOneError("");
    setStepTwoError("");
    setToggle1(false);
    setToggle2(false);
    setToggle3(true);
  };
  const submitFormData = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // validate step 1 & 2
    const validate1 = validateStepOne();
    const validate2 = validateStepTwo();
    if (!validate1) {
      setToggle1(true);
      return;
    }
    if (!validate2) {
      setToggle2(true);
      return;
    }
    // Validate step 3
    if (comments.length > 255) {
      setStepThreeError("Comments should be less than 255 character.");
      setToggle3(true);
      return;
    }
    if (comments.length === 0) {
      setStepThreeError("Comments should not be empty.");
      setToggle3(true);
      return;
    }
    const formInput: FormInput = {
      ...stepOneData,
      ...stepTwoData,
      comments,
    };
    setStepOneError("");
    setStepTwoError("");
    setStepThreeError("");
    setToggle1(true);
    setToggle2(false);
    setToggle3(false);
    // Send request
    console.log(formInput);
  };

  return (
    <Container>
      <FormStepOne
        toggleHandler={() => setToggle1((prevToggle) => !prevToggle)}
        submitHandler={submitStepOne}
        toggle={toggle1}
        error={stepOneError}
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
        error={stepTwoError}
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
        error={stepThreeError}
        onCommentsChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setComments(event.target.value)
        }
        commentsValue={comments}
      />
    </Container>
  );
};

export default FormContainer;
