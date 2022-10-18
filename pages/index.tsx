import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <button>Fazer login</button>
      <button>Registrar-se</button>
    </>
  );
};

export default Home;
