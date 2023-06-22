import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  ${({ theme }) => css`
    background-color: ${theme['green-500']};
    color: ${theme.white};
  `}// todas as propriedades enviadas para ButtonContainer
  /* ${(props) => css`
    background-color: ${buttonVariant[props.variant]};
  `} */
`
