import Head from "next/head";
import { NextPage } from "next";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

const Register: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <Head>
        <title>Registrar-se</title>
      </Head>
      <form>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button>Registrar-se</Button>
      </form>
    </>
  );
};

export default Register;
