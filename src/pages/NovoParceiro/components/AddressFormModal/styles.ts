import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const AddressFormModalContainer = styled.div``

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 64rem;
  background: white;

  padding: 2.4rem;
  border-radius: 16px;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
    margin-top: 2.4rem;

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
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;

  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  cursor: pointer;
  color: ${(props) => props.theme['txt-primary']};
`
