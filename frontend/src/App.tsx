import React from "react";
import styled from "styled-components";
import FormContainer from "./components/Form/FormContainer";
import GlobalStyles from "./styles";

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <FormContainer />
    </Main>
  );
};

export default App;
