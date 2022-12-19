import React, { HTMLInputTypeAttribute } from 'react';
import { StyledInput, StyledInputIcon, StyledContainer, StyledLabel } from './input-styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  isCalendarIcon?: boolean;
  onOpen?: (event: React.MouseEvent<HTMLInputElement>) => void;
  children: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  className,
  isCalendarIcon,
  onOpen,
  children,
  placeholder
}) => {
  return (
    <StyledContainer>
      {isCalendarIcon ? <StyledInputIcon onClick={onOpen} /> : null}

      <StyledInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
    </StyledContainer>
  );
};

export default Input;
