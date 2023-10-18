import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > main {
    flex-grow: 1;

    background: ${(props) => props.theme['bg-gray']};
    padding: 3.3rem 4.8rem;

    border-top-left-radius: 16px;
  }
`
