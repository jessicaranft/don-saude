import { useState } from 'react'

import { X } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

import { Input } from '../../../../components/Input'
import { CloseButton, Content, Overlay } from './styles'

export function AddressFormModal() {
  const [formData, setFormData] = useState({
    id: 0,
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    complement: '',
  })

  // Função assíncrona para inserir os dados no fake json-server
  // Falta lidar com tratamento de erros sobre os campos dos formulários
  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Endereço salvo com sucesso.')
      } else {
        console.error('Erro ao enviar o novo endereço.')
      }
    } catch (error) {
      console.error('Erro ao enviar o novo endereço:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({ ...prevData, [id]: value }))
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Novo endereço</Dialog.Title>
        <form onSubmit={handleFormSubmit}>
          <Input
            id="cep"
            labelTitle="CEP"
            placeholder="Apenas números"
            value={formData.cep}
            onChange={handleInputChange}
          />
          <Input
            id="street"
            labelTitle="Rua"
            placeholder="Placeholder"
            value={formData.street}
            onChange={handleInputChange}
          />
          <Input
            id="number"
            labelTitle="Número"
            placeholder="Apenas números"
            value={formData.number}
            onChange={handleInputChange}
          />
          <Input
            id="neighborhood"
            labelTitle="Bairro"
            placeholder="Placeholder"
            value={formData.neighborhood}
            onChange={handleInputChange}
          />
          <Input
            id="complement"
            labelTitle="Complemento"
            placeholder="Placeholder"
            value={formData.complement}
            onChange={handleInputChange}
          />

          <div className="button-wrapper">
            <Dialog.Close asChild>
              <button className="btn-cancel" type="button">
                Cancelar
              </button>
            </Dialog.Close>

            <button className="btn-next" type="submit">
              Finalizar
            </button>
          </div>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
