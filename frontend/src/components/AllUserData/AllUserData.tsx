import React, { useEffect, useState } from "react";
import Container from "../UI/Container";
import Header from "../UI/Header";
import UserList from "./UserList";
import { UserData } from "../NewUserData/FormType";

const AllUserData: React.FC = () => {
  const [userList, setUserList] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUserData: () => Promise<void> = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setUserList(data.userData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  return !userList.length ? (
    <Container>
      <Header>
        <h1>User List</h1>
      </Header>
      <p style={{ textAlign: "center" }}>Loading...</p>
    </Container>
  ) : (
    <Container>
      <Header>
        <h1>User List</h1>
      </Header>
      <UserList userData={userList} />
    </Container>
  );
};

export default AllUserData;
