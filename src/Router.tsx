import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Parceiros } from './pages/Parceiros'
import { NovoParceiro } from './pages/NovoParceiro'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Parceiros />} />
        <Route path="/history" element={<NovoParceiro />} />
      </Route>
    </Routes>
  )
}
