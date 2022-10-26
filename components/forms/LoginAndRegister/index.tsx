import nookies from "nookies";
import { useState } from "react";
import UserServices from "../../../services/client/userServices";
import { Container, Button, Title, Wrapper } from "../style";
import Input from "../../input";
import { useRouter } from "next/router";

interface Props {
  isLogin: boolean;
}

const FormsLoginRegister = ({ isLogin }: Props): JSX.Element => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { login, register } = UserServices;

  const verifyEmail = () => {
    const regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexEmail.test(email)) {
      return true;
    } else {
      setError("email");
      setTimeout(() => {
        setError("");
      }, 3000);
      return false;
    }
  };

  const verifyPassword = () => {
    if (password !== confirmPassword) {
      setError("password");
      setTimeout(() => {
        setError("");
      }, 3000);
      return false;
    } else {
      return true;
    }
  };

  const allVerify = () => {
    if (verifyEmail() && verifyPassword()) return true;
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    allVerify() &&
      (await register({ name, email, password }).then(({ data }) => {
        nookies.set(null, "token", data);
      }));
    router.push("/home");
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await login({ email, password }).then(({ data }) => {
      nookies.set(null, "token", data);
    });
    router.push("/home");
  };

  return (
    <Wrapper>
      <Container>
        <Title>{isLogin ? "Login" : "Register"}</Title>
        {isLogin ? (
          <>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <Input
              placeholder="Nome"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />
          </>
        )}
        <Button onClick={isLogin ? handleLogin : handleRegister}>
          {isLogin ? "Fazer Login" : "Registrar-se"}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default FormsLoginRegister;
