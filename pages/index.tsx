import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #454d6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  max-width: 400px;
  color: white;
  text-decoration: none;
  margin-top: 30px;
  width: 100%;
  background-color: #a03954;
  padding: 10px;

  :hover {
    background-color: #7e3045;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Link href="/login">
          <Button>Fazer login</Button>
        </Link>
        <Link href="/register">
          <Button>Registrar</Button>
        </Link>
      </Container>
    </>
  );
};

export default Home;
