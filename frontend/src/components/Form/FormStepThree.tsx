import React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Form from "../UI/Form";
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
    <FormBody>
      <FormHeader title="Step 3: Final Comments" onToggle={toggleHandler} />
      <Form onSubmit={submitHandler}>
        <div className="comments">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" rows={5}></textarea>
        </div>
        <Button type="submit">Next &gt;</Button>
      </Form>
    </FormBody>
  );
};

export default FormStepThree;
