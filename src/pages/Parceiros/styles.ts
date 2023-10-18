import styled from 'styled-components'

export const ParceirosContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;
  }
`

export const ContentContainer = styled.div`
  background: ${(props) => props.theme.white};

  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;

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

  .footer-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 0 1.6rem;
  }

  tfoot span {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${(props) => props.theme['txt-primary']};

    background-color: ${(props) => props.theme['shape-secondary']};
    border: 1px solid ${(props) => props.theme['shape-tertiary']};
    border-radius: 500px;

    padding: 0.4rem 0.8rem;
    margin: 0 0.8rem;
  }

  .pagination {
    font-size: 1rem;
    color: ${(props) => props.theme['txt-tertiary']};
    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      cursor: pointer;
    }
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
