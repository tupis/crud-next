import { useState } from "react";
import UserServices from "../../services/userServices";
import { Container, Button, Input } from "./style";

interface Props {
  isLogin: boolean;
}

const FormsLoginRegister = ({ isLogin }: Props): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmaPassword] = useState<string>("");
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
      }, 2000);
      return false;
    }
  };

  const verifyPassword = () => {
    if (password !== confirmPassword) {
      setError("password");
      setTimeout(() => {
        setError("");
      }, 2000);
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
    allVerify() && (await register({ name, email, password }));
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <Container>
      {isLogin ? (
        <>
          <Input
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      ) : (
        <>
          <Input
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error === "email" && <p>Formato do email inválido</p>}
          <Input
            label="Senha"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirmar Senha"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmaPassword(e.target.value)}
          />
          {error === "password" && <p>Senhas não coincidem</p>}
        </>
      )}
      <Button
        variant="contained"
        onClick={isLogin ? handleLogin : handleRegister}
      >
        {isLogin ? "Fazer Login" : "Registrar-se"}
      </Button>
    </Container>
  );
};

export default FormsLoginRegister;
