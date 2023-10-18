import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme['txt-secondary']};
    margin-bottom: 0.4rem;
  }

  input {
    width: 100%;

    padding: 0.8rem 1.2rem;

    border: 1px solid ${(props) => props.theme['shape-tertiary']};
    border-radius: 12px;
  }
`
