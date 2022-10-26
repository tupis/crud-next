import nookies from "nookies";
import { useState } from "react";
import { Props } from "../../../@types";
import { Button } from "../style";

import Input from "../../input";

import { useRouter } from "next/router";
import UserServices from "../../../services/client/userServices";
import React from "react";

const ChangeForms = (props: Props) => {
  const { user } = props;

  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  const router = useRouter();

  async function handleUpdate(e: any) {
    e.preventDefault();
    const { updateUser } = UserServices;
    await updateUser({ name, email }, user.id).then(({ data }) => {
      nookies.set(null, "token", data);
    });
    router.reload();
  }

  async function handleDelete(e: any) {
    e.preventDefault();
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
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="Nome"
        />
        <Input
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Button onClick={(e) => handleUpdate(e)}>Atualizar usuário</Button>
        <Button
          style={{ marginTop: 15 }}
          color="error"
          onClick={(e) => handleDelete(e)}
        >
          Deletar Usuário
        </Button>
      </form>
    </>
  );
};

export default ChangeForms;
