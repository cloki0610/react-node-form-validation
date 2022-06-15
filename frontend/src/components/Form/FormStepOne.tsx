import React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Button from "../UI/Button";
import Form from "../UI/Form";
import { FormProp } from "./FormType";

const FormStepOne: React.FC<FormProp> = ({
  toggleHandler,
  submitHandler,
  toggle,
}) => {
  return !toggle ? (
    <FormHeader title="Step 1: Your Details" onToggle={toggleHandler} />
  ) : (
    <FormBody>
      <FormHeader title="Step 1: Your Details" onToggle={toggleHandler} />
      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" name="surname" />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" />
        </div>
        <Button type="submit">Next &gt;</Button>
      </Form>
    </FormBody>
  );
};

export default FormStepOne;
