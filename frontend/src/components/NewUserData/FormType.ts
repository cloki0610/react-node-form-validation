export interface FormProp {
  toggleHandler: () => void;
  submitHandler: (event: React.SyntheticEvent) => void;
  toggle: boolean;
  error: string;
}

export interface StepOneInput {
  firstName: string;
  surName: string;
  email: string;
}

export interface StepTwoInput {
  phoneNumber: string;
  gender: string;
  year: string;
  month: string;
  day: string;
}

export interface FormInput {
  firstName: string;
  surName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  year: string;
  month: string;
  day: string;
  comments: string;
}

export interface UserData {
  id: number;
  firstName: string;
  surName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  comments: string;
}
