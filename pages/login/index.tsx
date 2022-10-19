import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import UserServices from "../../services/userServices";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { login } = UserServices;
    await login({ email, password }).then((response) =>
      console.log(response.data)
    );
  };

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
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </>
  );
};

export default Login;
