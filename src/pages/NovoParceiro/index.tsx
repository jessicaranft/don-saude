import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CaretLeft, CircleDashed, PlusCircle } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

import {
  ContentContainer,
  FormContainer,
  NewAddressButton,
  ParceirosContainer,
  ProgressTab,
} from './styles'
import { Input } from '../../components/Input'
import { SearchInput } from '../../components/SearchInput'
import { AddressFormModal } from './components/AddressFormModal'

// Declaração das tipagens para cadastro de parceiros e endereços
export type Address = {
  id: number
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
}

export function NovoParceiro() {
  const [step, setStep] = useState(1)

  const [addresses, setAddresses] = useState<Address[]>([])
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
  })

  // Navegação para a página de parceiros
  const navigate = useNavigate()

  function redirectToHome() {
    navigate('/')
  }

  // Função assíncrona para inserir os dados no fake json-server
  // Falta lidar com tratamento de erros sobre os campos dos formulários
  async function handleStep1Submit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

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

  useEffect(() => {
    fetch('http://localhost:3000/addresses')
      .then((response) => response.json())
      .then((data) => setAddresses(data))
      .catch((error) => console.error('Erro ao buscar endereços:', error))
  }, [])

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
                id="category"
                labelTitle="Categoria"
                placeholder="Selecione"
                value={partnerData.category}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, category: e.target.value })
                }
              />
              <Input id="CNPJ" labelTitle="CNPJ" placeholder="Placeholder" />
              <Input
                id="name"
                labelTitle="Nome"
                placeholder="Digite o nome completo"
                value={partnerData.name}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, name: e.target.value })
                }
              />
              <Input
                id="email"
                labelTitle="E-mail"
                placeholder="Digite o nome completo"
                value={partnerData.email}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, email: e.target.value })
                }
              />
              <Input
                id="phone"
                labelTitle="Telefone"
                placeholder="Digite o nome completo"
                value={partnerData.phone}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, phone: e.target.value })
                }
              />
              <Input
                id="mobile"
                labelTitle="Celular"
                placeholder="Digite o nome completo"
                value={partnerData.mobile}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, mobile: e.target.value })
                }
              />
              <Input
                id="clinicalContact"
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
                id="financialContact"
                labelTitle="Responsável Financeiro"
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
                id="password"
                labelTitle="Senha"
                placeholder="Digite aqui"
                type="password"
                value={partnerData.password}
                onChange={(e) =>
                  setPartnerData({ ...partnerData, password: e.target.value })
                }
              />
              <Input
                id="confirmPassword"
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
                <button className="btn-cancel" onClick={redirectToHome}>
                  Cancelar
                </button>
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
                  <NewAddressButton>
                    <PlusCircle size={20} />
                    <p>Novo endereço</p>
                  </NewAddressButton>

                  <AddressFormModal />
                </Dialog.Root>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>CEP</th>
                    <th>Rua</th>
                    <th>Número</th>
                    <th>Bairro</th>
                    <th>Complemento</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {addresses.length === 0 ? (
                    <p>Não há endereços cadastrados.</p>
                  ) : (
                    addresses.map((address) => (
                      <tr key={address.id}>
                        <td>{address.cep}</td>
                        <td>{address.street}</td>
                        <td>{address.number}</td>
                        <td>{address.neighborhood}</td>
                        <td>{address.complement}</td>
                        <td>
                          <div className="actions">
                            <CircleDashed size={12} />
                            <CircleDashed size={12} />
                            <CircleDashed size={12} />
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              <div className="button-wrapper">
                <button className="btn-cancel" onClick={redirectToHome}>
                  Cancelar
                </button>
                <button className="btn-next" onClick={redirectToHome}>
                  Finalizar
                </button>
              </div>
            </>
          )}
        </FormContainer>
      </ContentContainer>
    </ParceirosContainer>
  )
}
