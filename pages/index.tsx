import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Button>
        <Link href="/login">Fazer login</Link>
      </Button>
      <Button>
        <Link href="/register">Registrar</Link>
      </Button>
    </>
  );
};

export default Home;
