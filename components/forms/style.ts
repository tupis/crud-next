import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #454d6b;
`;

export const Container = styled.form`
  margin: 10px;
  padding: 80px 50px;
  max-width: 550px;
  background-color: #343b51;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  background-color: #a03954;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 10px;

  :hover {
    background-color: #7e3045;
  }
`;
