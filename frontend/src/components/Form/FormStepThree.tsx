import React from "react";
import FormHeader from "./FormHeader";
import Button from "../UI/Button";
import { FormProp } from "./FromType";

const FormStepThree: React.FC<FormProp> = ({ onToggle, onSubmit, toggle }) => {
  return !toggle ? (
    <FormHeader title="Step 3: Final Comments" toggler={onToggle} />
  ) : (
    <div>
      <FormHeader title="Step 3: Final Comments" toggler={onToggle} />
      <Button onClick={onSubmit}>Next &gt;</Button>
    </div>
  );
};

export default FormStepThree;
