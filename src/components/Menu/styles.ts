import styled from 'styled-components'

export const MenuContainer = styled.aside`
  width: 21.1rem;
  padding: 2.6rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 12.3rem;
  }

  nav {
    margin-top: 5.6rem;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    a {
      background: none;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: left;
      gap: 1.2rem;

      font-family: 'Montserrat', sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      color: rgba(18, 25, 41, 0.56);

      width: 16.3rem;
      padding: 0.8rem 1.6rem;
      border-radius: 16px;

      transition: background 0.2s;

      &.active {
        background-color: ${(props) => props.theme['brand-pure']};
        color: ${(props) => props.theme.white};
      }
    }
  }
`

export const ProfileContainer = styled.footer`
  background: ${(props) => props.theme['bt-bg']};

  font-family: 'Montserrat', sans-serif;
  color: rgba(18, 25, 41, 0.56);

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 0.8rem;

  width: 100%;
  padding: 0.4rem;

  border-radius: 500px;

  img {
    width: 2.6rem;
    height: 2.6rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1.2rem;
    font-weight: 700;
  }

  span {
    font-size: 1.2rem;
    font-size: 400;
  }
`
