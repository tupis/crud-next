import { getCookie } from "cookies-next";
import styled from "styled-components";
import ChangeForms from "../components/forms/ChangeForms";
import { Props } from "../@types";
import { useState } from "react";
import React from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #454d6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ChangeForms {
    max-width: 300px;
  }
`;

export async function getServerSideProps({ req, res }: any) {
  const getUser: any = getCookie("user", { req, res });
  const user = JSON.parse(getUser);

  return {
    props: {
      user,
    },
  };
}

const Home = (props: Props) => {
  const [user, setUser] = useState(props.user);
  const [name, setName] = useState(user.name.split(" ")[0]);

  return (
    <Container>
      <h1>{`Seja muito bem-vindo, ${name}`}!</h1>
      <ChangeForms user={user} updateName={setName} />
    </Container>
  );
};

export default Home;
