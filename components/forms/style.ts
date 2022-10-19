import styled from "styled-components";
import { TextField, Button as ButtonVector } from "@mui/material";

export const Container = styled.form`
  margin: auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  max-height: 600px;
  height: 600px;
  background-color: #7ad6d7;
`;

export const Input = styled(TextField)`
  margin: 5px 0;
`;

export const Button = styled(ButtonVector)`
  width: 100%;
`;
