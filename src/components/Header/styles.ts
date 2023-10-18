import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 8.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4.8rem;

  div {
    display: flex;
    gap: 1.6rem;
  }
`

export const ProfileContainer = styled.div`
  height: 3.2rem;

  div:first-child {
    color: ${(props) => props.theme['txt-secondary']};

    display: flex;
    align-items: center;
    gap: 2.4rem;

    border-right: 1px solid ${(props) => props.theme['shape-tertiary']};
    padding-right: 1.6rem;

    svg {
      cursor: pointer;
    }
  }

  button {
    border: none;
    background: ${(props) => props.theme['brand-light']};
    color: ${(props) => props.theme['brand-pure']};

    padding: 0.8rem;
    border-radius: 50%;

    cursor: pointer;
  }
`
