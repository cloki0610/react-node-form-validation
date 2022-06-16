import React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Button from "../UI/Button";
import Form from "../UI/Form";
import { FormProp, StepOneInput } from "./FormType";

interface stepOneProp extends FormProp {
  onStepOneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  stepOneData: StepOneInput;
}

const FormStepOne: React.FC<stepOneProp> = ({
  toggleHandler,
  submitHandler,
  toggle,
  onStepOneChange,
  stepOneData,
}) => {
  return !toggle ? (
    <FormHeader title="Step 1: Your Details" onToggle={toggleHandler} />
  ) : (
    <FormBody>
      <FormHeader title="Step 1: Your Details" onToggle={toggleHandler} />
      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={onStepOneChange}
            value={stepOneData.firstName}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surName"
            name="surName"
            onChange={onStepOneChange}
            value={stepOneData.surName}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={onStepOneChange}
            value={stepOneData.email}
          />
        </div>
        <Button type="submit">Next &gt;</Button>
      </Form>
    </FormBody>
  );
};

export default FormStepOne;
