import { NavLink } from 'react-router-dom'

import { MenuContainer, ProfileContainer } from './styles'

import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.svg'

import {
  CaretDown,
  ChartPie,
  CurrencyDollar,
  GearSix,
  IdentificationBadge,
  User,
  UsersFour,
} from 'phosphor-react'

export function Menu() {
  return (
    <MenuContainer>
      <div>
        <header>
          <img src={logo} alt="" />
        </header>

        <nav>
          <NavLink to="/indicadores">
            <ChartPie size={20} />
            <span>Indicadores</span>
          </NavLink>

          <NavLink to="/atendimento">
            <IdentificationBadge size={20} />
            <span>Atendimento</span>
          </NavLink>

          <NavLink to="/financeiro">
            <CurrencyDollar size={20} />
            <span>Financeiro</span>
          </NavLink>

          <NavLink to="/">
            <UsersFour size={20} />
            <span>Parceiros</span>
          </NavLink>

          <NavLink to="/usuarios">
            <User size={20} />
            <span>Usuários</span>
          </NavLink>

          <NavLink to="/configurações">
            <GearSix size={20} />
            <span>Configurações</span>
            <CaretDown size={10} />
          </NavLink>
        </nav>
      </div>

      <ProfileContainer>
        <img src={profile} alt="" />
        <div>
          <strong>Ibiporã</strong>
          <span>Gustavo Borges</span>
        </div>
      </ProfileContainer>
    </MenuContainer>
  )
}
