import { MutableRefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const WrapperInput = styled.div`
  font-family: "Segoe UI", "Tahoma", "Geneva", "Verdana", sans-serif;
  position: relative;
  width: 300px;
  height: 50px;
  margin: 7px 0;
`;
export const InputText = styled.input`
  z-index: 2;
  position: absolute;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  border-radius: 15px;
  padding: 10px;
  color: white;

  :focus {
    outline: none;
  }
`;

export const Label = styled.label`
  z-index: 1;
  color: white;
  position: absolute;
  left: 11px;

  transition: 0.3s;
`;

interface Props {
  value: string;
  onChange: Function;
  placeholder?: string;
}

const Input = ({ placeholder, onChange, value }: Props) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  function topMoveLabel() {
    if (value.length === 0 && inputFocus === false) {
      return "6px";
    } else {
      return "-15px";
    }
  }

  return (
    <WrapperInput>
      <InputText
        onChange={(e) => onChange(e)}
        value={value}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      {placeholder && (
        <Label style={{ top: topMoveLabel() }}>{placeholder}</Label>
      )}
    </WrapperInput>
  );
};

export default Input;
