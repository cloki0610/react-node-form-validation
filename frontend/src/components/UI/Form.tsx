import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 95%;
  height: auto;
  margin-top: 5px;
  padding: 10px;
  font-size: 16px;
  border: none;
  color: black;

  & input,
  & select,
  & textarea {
    width: 100%;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    border: none;
    box-sizing: border-box;
    outline: none !important;
  }

  & .comments {
    grid-row: 1 / 4;
  }

  & .comments textarea {
    height: 80%;
  }

  & input:focus,
  & select:focus,
  & textarea:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }

  & label {
    width: 100%;
    margin: 5px;
  }

  & #year,
  & #month,
  & #day {
    width: 15%;
  }

  & button {
    grid-row-start: 3;
    grid-column-start: 2;
    justify-self: end;
  }
`;

export default Form;
