import React from "react";
import Scroll from "../UI/Scroll";
import UserCard from "./UserCard";
import { UserData } from "../NewUserData/FormType";

const UserList: React.FC<{ userData: UserData[] }> = ({ userData }) => {
  return (
    <Scroll>
      {userData.map((user: UserData) => {
        return <UserCard user={user} />;
      })}
    </Scroll>
  );
};

export default UserList;
