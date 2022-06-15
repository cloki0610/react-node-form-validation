import React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Form from "../UI/Form";
import Button from "../UI/Button";
import { FormProp } from "./FormType";

const FormStepTwo: React.FC<FormProp> = ({
  toggleHandler,
  submitHandler,
  toggle,
}) => {
  return !toggle ? (
    <FormHeader title="Step 2: More Comments" onToggle={toggleHandler} />
  ) : (
    <FormBody>
      <FormHeader title="Step 2: More Comments" onToggle={toggleHandler} />
      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor="phone">Telephone Number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans-gender</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        <div>
          <label htmlFor="year">Date of Birth (DD/MM/YYYY)</label>
          <br />
          <input type="text" id="day" name="day" />
          <input type="text" id="month" name="month" />
          <input type="text" id="year" name="year" />
        </div>
        <Button type="submit">Next &gt;</Button>
      </Form>
    </FormBody>
  );
};

export default FormStepTwo;
