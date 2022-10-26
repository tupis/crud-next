import nookies from "nookies";
import styled from "styled-components";
import ChangeForms from "../components/forms/ChangeForms";
import { Props } from "../@types";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { Title } from "../components/forms/style";

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

export async function getServerSideProps(ctx: any) {
  const getCookies: any = nookies.get(ctx);
  const { token } = getCookies;
  const user = jwt.decode(token);

  return {
    props: {
      user,
    },
  };
}

const Home = (props: Props) => {
  const [user] = useState(props.user);
  const name: string = user.name.split(" ")[0];

  const router = useRouter();

  function logOut(): void {
    nookies.destroy(null, "token");
    router.push("/");
  }

  return (
    <Container>
      <Title>
        {`Seja muito bem-vindo(a), ${name}`}!{" "}
        <span onClick={logOut} style={{ color: "red", cursor: "pointer" }}>
          Fazer Logout!
        </span>
      </Title>
      <ChangeForms user={user} />
    </Container>
  );
};

export default Home;
