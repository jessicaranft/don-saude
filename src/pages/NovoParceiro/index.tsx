import { CaretLeft, CircleDashed } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

import {
  ContentContainer,
  FormContainer,
  ParceirosContainer,
  ProgressTab,
} from './styles'
import { Input } from '../../components/Input'
import { useState } from 'react'
import { SearchInput } from '../../components/SearchInput'
import { AddButton } from '../../components/AddButton'
import { AddressFormModal } from './components/AddressFormModal'

export type Address = {
  cep: string
  street: string
  number: string
  neighborhood: string
  complement: string
}

export type Partner = {
  id: number
  category: string
  cnpj: string
  name: string
  email: string
  phone: string
  mobile: string
  clinicalContact: string
  financialContact: string
  password: string
  confirmPassword: string
  addresses: number[]
}

export function NovoParceiro() {
  const [step, setStep] = useState(1)
  const [partnerData, setPartnerData] = useState<Partner>({
    id: 0,
    category: '',
    cnpj: '',
    name: '',
    email: '',
    phone: '',
    mobile: '',
    clinicalContact: '',
    financialContact: '',
    password: '',
    confirmPassword: '',
    addresses: [],
  })

  async function handleStep1Submit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/partners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(partnerData),
      })

      if (response.ok) {
        const newPartner = await response.json()
        setPartnerData(newPartner)
        setStep(2)
      } else {
        console.error('Erro ao enviar dados do parceiro.')
      }
    } catch (error) {
      console.error('Erro ao enviar dados do parceiro:', error)
    }
  }

  return (
    <ParceirosContainer>
      <header>
        <CaretLeft size={19} />
        <h1>Novo Parceiro</h1>
      </header>

      <ContentContainer>
        <ProgressTab>
          <div className={step === 1 ? 'active' : 'inactive'}>
            <span>1</span>
            <p>Informações</p>
          </div>
          <div className={step === 2 ? 'active' : 'inactive'}>
            <span>2</span>
            <p>Endereços</p>
          </div>
        </ProgressTab>

        <FormContainer>
          {step === 1 && (
            <form>
              <Input
                id="Categoria"
                labelTitle="Categoria"
                placeholder="Selecione"
                value={partnerData.category}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, category: e.target.value })
                }
              />
              <Input id="CNPJ" labelTitle="CNPJ" placeholder="Placeholder" />
              <Input
                id="Nome"
                labelTitle="Nome"
                placeholder="Digite o nome completo"
                value={partnerData.name}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, name: e.target.value })
                }
              />
              <Input
                id="E-mail"
                labelTitle="E-mail"
                placeholder="Digite o nome completo"
                value={partnerData.email}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, email: e.target.value })
                }
              />
              <Input
                id="Telefone"
                labelTitle="Telefone"
                placeholder="Digite o nome completo"
                value={partnerData.phone}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, phone: e.target.value })
                }
              />
              <Input
                id="Celular"
                labelTitle="Celular"
                placeholder="Digite o nome completo"
                value={partnerData.mobile}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, mobile: e.target.value })
                }
              />
              <Input
                id="Responsável Clínico"
                labelTitle="Responsável Clínico"
                placeholder="Digite o nome completo"
                value={partnerData.clinicalContact}
                onChange={(e) =>
                  setPartnerData({
                    ...partnerData,
                    clinicalContact: e.target.value,
                  })
                }
              />
              <Input
                id="Responsável Financeiro"
                labelTitle="Responsável Clínico"
                placeholder="Digite o nome completo"
                value={partnerData.financialContact}
                onChange={(e) =>
                  setPartnerData({
                    ...partnerData,
                    financialContact: e.target.value,
                  })
                }
              />
              <Input
                id="Senha"
                labelTitle="Senha"
                placeholder="Digite aqui"
                type="password"
                value={partnerData.password}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, password: e.target.value })
                }
              />
              <Input
                id="Confirme a senha"
                labelTitle="Confirme a senha"
                placeholder="Digite aqui"
                type="password"
                value={partnerData.confirmPassword}
                onChange={(e) =>
                  setPartnerData({
                    ...partnerData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <div></div>
              <div className="button-wrapper">
                <button className="btn-cancel">Cancelar</button>
                <button className="btn-next" onClick={handleStep1Submit}>
                  Próxima
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <>
              <div className="action-bar">
                <SearchInput placeholder="Buscar endereço" />

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <AddButton title="Novo endereço" variant="pure" />
                  </Dialog.Trigger>

                  <AddressFormModal />
                </Dialog.Root>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th>Unidade</th>
                    <th>Colaborador</th>
                    <th>Data de cadastro</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nome</td>
                    <td>Rua Nome da Rua, XXX - Bairro</td>
                    <td>(XX) X XXXX-XXXX</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>
                      <div className="actions">
                        <CircleDashed size={12} />
                        <CircleDashed size={12} />
                        <CircleDashed size={12} />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Nome</td>
                    <td>Rua Nome da Rua, XXX - Bairro</td>
                    <td>(XX) X XXXX-XXXX</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>
                      <div className="actions">
                        <CircleDashed size={12} />
                        <CircleDashed size={12} />
                        <CircleDashed size={12} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="button-wrapper">
                <button className="btn-cancel">Cancelar</button>
                <button className="btn-next">Finalizar</button>
              </div>
            </>
          )}
        </FormContainer>
      </ContentContainer>
    </ParceirosContainer>
  )
}
