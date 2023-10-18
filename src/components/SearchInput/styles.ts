import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  border: 1px solid ${(props) => props.theme['shape-tertiary']};
  border-radius: 500px;

  width: 40rem;

  display: flex;
  align-items: center;
  padding: 0 0.8rem;

  color: ${(props) => props.theme['txt-tertiary']};

  input {
    width: 100%;
    border: none;
    background: none;

    padding: 0.8rem 1.2rem;

    color: ${(props) => props.theme['txt-tertiary']};
    font-size: 1.4rem;
  }
`
