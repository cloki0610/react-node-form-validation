import React from "react";
import FormHeader from "./FormHeader";
import Button from "../UI/Button";
import { FormProp } from "./FormType";

const FormStepThree: React.FC<FormProp> = ({
  toggleHandler,
  submitHandler,
  toggle,
}) => {
  return !toggle ? (
    <FormHeader title="Step 3: Final Comments" onToggle={toggleHandler} />
  ) : (
    <div>
      <FormHeader title="Step 3: Final Comments" onToggle={toggleHandler} />
      <form onSubmit={submitHandler}>
        <Button type="submit">Next &gt;</Button>
      </form>
    </div>
  );
};

export default FormStepThree;
