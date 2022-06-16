import React from "react";
import Header from "../UI/Header";

const FormHeader: React.FC<{ title: string; onToggle: () => void }> = ({
  title,
  onToggle,
}) => {
  return (
    <Header onClick={onToggle}>
      <h1>{title}</h1>
    </Header>
  );
};

export default FormHeader;
