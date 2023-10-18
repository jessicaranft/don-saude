import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const AddressFormModalContainer = styled.div``

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 77.5rem;
  height: 200rem;
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
