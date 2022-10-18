import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <form>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
      </form>
    </>
  );
};

export default Login;
