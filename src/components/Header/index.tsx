import { AddButton } from '../AddButton'
import { SearchInput } from '../SearchInput'
import { HeaderContainer, ProfileContainer } from './styles'

import { Star, BellSimple, User } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <AddButton title="Novo atendimento" variant="light" />
        <SearchInput placeholder="Buscar usuário" />
      </div>

      <ProfileContainer>
        <div>
          <Star size={16} />
          <BellSimple size={16} />
        </div>

        <div>
          <button>
            <User size={16} />
          </button>
        </div>
      </ProfileContainer>
    </HeaderContainer>
  )
}
