import * as Dialog from '@radix-ui/react-dialog'
import { Input } from '../../../../components/Input'
import { Content, Overlay } from './styles'

export function AddressFormModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Close />
        <Dialog.Title>Novo endereço</Dialog.Title>
        <form>
          <Input id="cep" labelTitle="CEP" placeholder="Apenas números" />
        </form>
      </Content>
    </Dialog.Portal>
  )
}
