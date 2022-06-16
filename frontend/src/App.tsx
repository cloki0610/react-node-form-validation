import React, { Suspense } from "react";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import GlobalStyles from "./styles";

const NewUserData = React.lazy(
  () => import("./components/NewUserData/NewUserData")
);
const AllUserData = React.lazy(
  () => import("./components/AllUserData/AllUserData")
);

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Main>
      <GlobalStyles />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Routes>
          <Route path="/" element={<NewUserData />} />
          <Route path="/all-data" element={<AllUserData />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </Main>
  );
};

export default App;
