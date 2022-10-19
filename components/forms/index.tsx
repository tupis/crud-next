import { useState } from "react";
import UserServices from "../../services/userServices";
import Button from "../Button";
import Input from "../Input";

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

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await login({ email, password });
  };

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

  return (
    <form>
      {isLogin ? (
        <>
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
        </>
      ) : (
        <>
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
          {error === "email" && <p>Formato do email inválido</p>}
          <Input
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmaPassword(e.target.value)}
          />
          {error === "password" && <p>Senhas não coincidem</p>}
        </>
      )}
      <Button onClick={isLogin ? handleLogin : handleRegister}>
        {isLogin ? "Fazer Login" : "Registrar-se"}
      </Button>
    </form>
  );
};

export default FormsLoginRegister;
