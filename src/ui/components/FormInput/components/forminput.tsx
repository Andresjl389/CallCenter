import { Accordion } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div<{ marginTop?: string }>`
  margin-top: ${(props) => props.marginTop || "20px"};
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
`;

const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  width: 300px;
  height: 40px;
  border: 1px solid #ddd;
`;

const ErrorText = styled.span`
  font-size: 13px;
  margin-top: 5px;
  color: #ff7759;
  font-weight: 700;
`;

const RadioContainer = styled.div`
  display: flex;
  align-self: start;
  grid-columns: 1/-1;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

interface FormInputComponentProps {
  label?: string;
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  marginTop?: string;
  type?: string;
  options?: { label: string; value: string }[];
}

const FormInputComponent: React.FC<FormInputComponentProps> = ({
  label,
  name,
  defaultValue = "",
  placeholder = "",
  onChange,
  value,
  marginTop,
  type = "text",
  options,
}) => {
  const [touched, setTouched] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <Container marginTop={marginTop}>
      <Label>{label}</Label>
      {type === "radio" ? (
        options?.map((option) => (
          <RadioContainer key={option.value}>
            <RadioInput
              type="radio"
              name={name}
              value={option.value}
              onChange={onChange}
              checked={value === option.value}
            />
            {option.label}
          </RadioContainer>
        ))
      ) : (
        <Input
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onBlur={handleBlur}
          onChange={onChange}
          value={value}
        />
      )}
      {touched && !value && <ErrorText>This field is required</ErrorText>}
    </Container>
  );
};

export default FormInputComponent;
