import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'

import { ContentContainer, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Menu />

      <ContentContainer>
        <Header />
        <main>
          <Outlet />
        </main>
      </ContentContainer>
    </LayoutContainer>
  )
}
