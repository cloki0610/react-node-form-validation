import React from "react";
import FormHeader from "./FormHeader";
import Button from "../UI/Button";
import { FormProp } from "./FormType";

const FormStepTwo: React.FC<FormProp> = ({ onToggle, onSubmit, toggle }) => {
  return !toggle ? (
    <FormHeader title="Step 2: More Comments" toggler={onToggle} />
  ) : (
    <div>
      <FormHeader title="Step 2: More Comments" toggler={onToggle} />
      <Button onClick={onSubmit}>Next &gt;</Button>
    </div>
  );
};

export default FormStepTwo;
