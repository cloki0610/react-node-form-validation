import React from "react";
import styled from "styled-components";
import { UserData } from "../NewUserData/FormType";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3px;
  width: 95%;
  height: auto;
  padding: 10px;
  font-size: 16px;
  border: none;

  & p,
  & h2 {
    margin: 10px 0;
  }

  & h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
  }

  & h2,
  & .user-comments {
    grid-column: 1 / 3;
  }
`;

const UserCard: React.FC<{ user: UserData }> = ({ user }) => {
  const dateOfBirth = user.dateOfBirth.split("T")[0];
  return (
    <Card>
      <h2>
        {user.firstName} {user.surName}
      </h2>
      <p>Gender: {user.gender}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <p>Email: {user.email}</p>
      <p>Phone Numner: {user.phoneNumber}</p>
      <div className="user-comments">
        <p>Comments:</p>
        <p>{user.comments}</p>
      </div>
    </Card>
  );
};

export default UserCard;
