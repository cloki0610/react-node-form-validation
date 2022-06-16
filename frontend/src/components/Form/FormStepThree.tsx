import React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Form from "../UI/Form";
import Button from "../UI/Button";
import { FormProp } from "./FormType";

interface stepThreeProp extends FormProp {
  onCommentsChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  commentsValue: string;
}

const FormStepThree: React.FC<stepThreeProp> = ({
  toggleHandler,
  submitHandler,
  toggle,
  onCommentsChange,
  commentsValue,
}) => {
  return !toggle ? (
    <FormHeader title="Step 3: Final Comments" onToggle={toggleHandler} />
  ) : (
    <FormBody>
      <FormHeader title="Step 3: Final Comments" onToggle={toggleHandler} />
      <Form onSubmit={submitHandler}>
        <div className="comments">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            rows={5}
            onChange={onCommentsChange}
            value={commentsValue}
          />
        </div>
        <Button type="submit">Next &gt;</Button>
      </Form>
    </FormBody>
  );
};

export default FormStepThree;
