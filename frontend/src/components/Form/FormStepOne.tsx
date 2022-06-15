import React from "react";
import FormHeader from "./FormHeader";
import Button from "../UI/Button";
import { FormProp } from "./FormType";

const FormStepOne: React.FC<FormProp> = ({
  toggleHandler,
  submitHandler,
  toggle,
}) => {
  return !toggle ? (
    <FormHeader title="Step 1: Your Details" onToggle={toggleHandler} />
  ) : (
    <div>
      <FormHeader title="Step 1: Your Details" onToggle={toggleHandler} />
      <form onSubmit={submitHandler}>
        <Button type="submit">Next &gt;</Button>
      </form>
    </div>
  );
};

export default FormStepOne;
