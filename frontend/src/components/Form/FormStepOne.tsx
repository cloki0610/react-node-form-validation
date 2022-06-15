import React from "react";
import FormHeader from "./FormHeader";
import Button from "../UI/Button";
import { FormProp } from "./FromType";

const FormStepOne: React.FC<FormProp> = ({ onToggle, onSubmit, toggle }) => {
  return !toggle ? (
    <FormHeader title="Step 1: Your Details" toggler={onToggle} />
  ) : (
    <div>
      <FormHeader title="Step 1: Your Details" toggler={onToggle} />
      <Button onClick={onSubmit}>Next &gt;</Button>
    </div>
  );
};

export default FormStepOne;
