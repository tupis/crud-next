import nookies from "nookies";
import { useEffect, useState } from "react";
import { Props } from "../../../@types";
import { Input, Button } from "../style";
import { Button as ButtonMui } from "@mui/material";
import { useRouter } from "next/router";
import UserServices from "../../../services/client/userServices";
import React from "react";

const ChangeForms = (props: Props) => {
  const { user } = props;

  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  const router = useRouter();

  async function handleUpdate() {
    const { updateUser } = UserServices;
    await updateUser({ name, email }, user.id).then(({ data }) => {
      nookies.set(null, "token", data);
    });
    router.reload();
  }

  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja deletar sua conta?");
    if (confirm) {
      const { deleteUser } = UserServices;
      await deleteUser(user.id).then(({ data }) => {
        nookies.destroy(null, "token");
        router.push("/");
      });
    }
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
        <Button variant="contained" onClick={handleUpdate}>
          Atualizar usuário
        </Button>
      </form>

      <ButtonMui
        style={{ marginTop: 15 }}
        variant="outlined"
        color="error"
        onClick={handleDelete}
      >
        Deletar Usuário
      </ButtonMui>
    </>
  );
};

export default ChangeForms;
