import styled from 'styled-components'

export const ParceirosContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.6rem;
  }
`

export const ContentContainer = styled.div`
  background: ${(props) => props.theme.white};

  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;
`

export const ProgressTab = styled.div`
  border: 2px solid ${(props) => props.theme['bg-gray']};
  border-radius: 16px;

  font-size: 1rem;
  font-weight: 500;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 0.2rem;

  div {
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    padding: 0.8rem 1.2rem;
  }

  span {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }

  .active {
    color: ${(props) => props.theme['brand-pure']};
    background: ${(props) => props.theme['brand-light']};

    span {
      background-color: ${(props) => props.theme['brand-pure']};
      color: ${(props) => props.theme['brand-light']};
    }
  }

  .inactive {
    color: ${(props) => props.theme['txt-tertiary']};

    span {
      background-color: ${(props) => props.theme['shape-tertiary']};
      color: ${(props) => props.theme['txt-secondary']};
    }
  }
`

export const FormContainer = styled.div`
  padding: 2.8rem 0;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;

    margin-top: 2.4rem;
  }

  .button-wrapper button {
    border: 0;
    width: 100%;
    padding: 1rem 0;

    border-radius: 500px;

    cursor: pointer;
  }

  .btn-next {
    background: ${(props) => props.theme['brand-pure']};
    color: ${(props) => props.theme.white};
  }

  .btn-cancel {
    background: none;
    color: ${(props) => props.theme['txt-secondary']};
  }

  .action-bar {
    display: flex;
    justify-content: space-between;
  }

  table {
    width: 100%;
    margin-top: 0.8rem;

    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;

    border-collapse: collapse;
  }

  table thead {
    font-weight: 500;
    color: ${(props) => props.theme['txt-tertiary']};
    height: 3.6rem;

    border-top: 1px solid ${(props) => props.theme['shape-tertiary']};
  }

  table td,
  tfoot {
    font-weight: 500;
    color: ${(props) => props.theme['txt-primary']};
    height: 4.8rem;

    text-align: center;

    border-top: 1px solid ${(props) => props.theme['shape-tertiary']};
  }

  table td span {
    font-size: 0.7rem;
    color: ${(props) => props.theme['txt-primary']};
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    svg {
      cursor: pointer;
    }
  }
`
