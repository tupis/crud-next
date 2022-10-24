import { NextPage } from "next";
import Head from "next/head";
import FormsLoginRegister from "../components/forms/LoginAndRegister";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <FormsLoginRegister isLogin={true} />
    </>
  );
};

export default Login;
