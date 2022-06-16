import React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Form from "../UI/Form";
import Button from "../UI/Button";
import { FormProp, StepTwoInput } from "./FormType";

interface stepTwoProp extends FormProp {
  onStepTwoChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  stepTwoData: StepTwoInput;
}

const FormStepTwo: React.FC<stepTwoProp> = ({
  toggleHandler,
  submitHandler,
  toggle,
  onStepTwoChange,
  stepTwoData,
}) => {
  return !toggle ? (
    <FormHeader title="Step 2: More Comments" onToggle={toggleHandler} />
  ) : (
    <FormBody>
      <FormHeader title="Step 2: More Comments" onToggle={toggleHandler} />
      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor="phoneNumber">Telephone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            maxLength={11}
            onChange={onStepTwoChange}
            value={stepTwoData.phoneNumber}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            onChange={onStepTwoChange}
            value={stepTwoData.gender}
          >
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
          <input
            type="text"
            id="day"
            name="day"
            maxLength={2}
            onChange={onStepTwoChange}
            value={stepTwoData.day}
          />
          <input
            type="text"
            id="month"
            name="month"
            maxLength={2}
            onChange={onStepTwoChange}
            value={stepTwoData.month}
          />
          <input
            type="text"
            id="year"
            name="year"
            maxLength={4}
            onChange={onStepTwoChange}
            value={stepTwoData.year}
          />
        </div>
        <Button type="submit">Next &gt;</Button>
      </Form>
    </FormBody>
  );
};

export default FormStepTwo;
