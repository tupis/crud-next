import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <button>
        <Link href="/login">Fazer login</Link>
      </button>
      <button>
        <Link href="/register">Registrar</Link>
      </button>
    </>
  );
};

export default Home;
