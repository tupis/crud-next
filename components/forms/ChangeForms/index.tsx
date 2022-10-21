import { useState } from "react";
import { Props } from "../../../@types";
import { Input, Button } from "../style";
import { Button as ButtonMui } from "@mui/material";
import { setCookie } from "cookies-next";
import UserServices from "../../../services/userServices";

interface PropsForms extends Props {
  updateName: any;
}

const ChangeForms = (props: PropsForms) => {
  const { user, updateName } = props;

  const [name, setName] = useState<string>(user.name);
  const [password, setPassword] = useState<string>(user.password);
  const [email, setEmail] = useState<string>(user.email);

  async function handleUpdate() {
    const { updateUser } = UserServices;
    await updateUser({ name, password, email }, user.id).then(({ data }) => {
      setCookie("user", data);
      updateName(data.name);
    });
  }

  return (
    <>
      <form>
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
        <Input
          label="Senha"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleUpdate}>
          Atualizar usuário
        </Button>
      </form>

      <ButtonMui variant="outlined" color="error">
        Deletar Usuário
      </ButtonMui>
    </>
  );
};

export default ChangeForms;
