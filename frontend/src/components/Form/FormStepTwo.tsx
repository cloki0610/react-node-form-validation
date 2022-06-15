import React from "react";
import FormHeader from "./FormHeader";
import Button from "../UI/Button";
import { FormProp } from "./FormType";

const FormStepTwo: React.FC<FormProp> = ({
  toggleHandler,
  onSubmit,
  toggle,
}) => {
  return !toggle ? (
    <FormHeader title="Step 2: More Comments" onToggle={toggleHandler} />
  ) : (
    <div>
      <FormHeader title="Step 2: More Comments" onToggle={toggleHandler} />
      <form onSubmit={onSubmit}>
        <Button type="submit">Next &gt;</Button>
      </form>
    </div>
  );
};

export default FormStepTwo;
