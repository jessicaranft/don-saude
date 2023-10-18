import styled, { css } from 'styled-components'

interface AddButtonContainerProps {
  variant?: 'pure' | 'light'
}

export const AddButtonContainer = styled.button<AddButtonContainerProps>`
  border: 0;
  background: ${(props) => props.theme['brand-light']};
  border-radius: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  min-width: 20rem;
  height: 4rem;
  padding: 0 1.6rem;

  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme['brand-pure']};
  line-height: 0;

  cursor: pointer;

  transition: opacity 0.2s;

  ${(props) =>
    props.variant === 'pure' &&
    css`
      background: ${props.theme['brand-pure']};
      color: ${props.theme.white};
    `}

  ${(props) =>
    props.variant === 'light' &&
    css`
      background: ${props.theme['brand-light']};
      color: ${props.theme['brand-pure']};
    `}

  &:hover {
    opacity: 80%;
  }
`
