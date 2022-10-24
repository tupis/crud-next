import Head from "next/head";
import { NextPage } from "next";
import FormsLoginRegister from "../components/forms/LoginAndRegister";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Registrar-se</title>
      </Head>
      <FormsLoginRegister isLogin={false} />
    </>
  );
};

export default Register;
