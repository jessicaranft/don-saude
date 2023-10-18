import { CaretDown, CircleDashed, CaretLeft, CaretRight } from 'phosphor-react'

import { AddButton } from '../../components/AddButton'
import { SearchInput } from '../../components/SearchInput'
import { ContentContainer, ParceirosContainer } from './styles'
import { Link } from 'react-router-dom'

export function Parceiros() {
  return (
    <ParceirosContainer>
      <header>
        <h1>Parceiros</h1>
        <Link to="/new">
          <AddButton title="Adicionar Parceiro" variant="pure" />
        </Link>
      </header>

      <ContentContainer>
        <SearchInput placeholder="Buscar parceiros" />

        <table>
          <thead>
            <tr>
              <th>Organização</th>
              <th>Nome</th>
              <th>Telefones</th>
              <th>Código antigo</th>
              <th>Unidade preferida</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XXXXXX</td>
              <td>
                <div>
                  <p>Username Name</p>
                  <span>XXX.XXX.XXX-XX | Titular</span>
                </div>
              </td>
              <td>(XX) X XXXX-XXXX</td>
              <td>XXXXXX</td>
              <td>Partner Name</td>
              <td>
                <div className="actions">
                  <CircleDashed size={12} />
                  <CircleDashed size={12} />
                  <CircleDashed size={12} />
                </div>
              </td>
            </tr>

            <tr>
              <td>XXXXXX</td>
              <td>
                <div>
                  <p>Username Name</p>
                  <span>XXX.XXX.XXX-XX | Titular</span>
                </div>
              </td>
              <td>(XX) X XXXX-XXXX</td>
              <td>XXXXXX</td>
              <td>Partner Name</td>
              <td>
                <div className="actions">
                  <CircleDashed size={12} />
                  <CircleDashed size={12} />
                  <CircleDashed size={12} />
                </div>
              </td>
            </tr>

            <tr>
              <td>XXXXXX</td>
              <td>
                <div>
                  <p>Username Name</p>
                  <span>XXX.XXX.XXX-XX | Titular</span>
                </div>
              </td>
              <td>(XX) X XXXX-XXXX</td>
              <td>XXXXXX</td>
              <td>Partner Name</td>
              <td>
                <div className="actions">
                  <CircleDashed size={12} />
                  <CircleDashed size={12} />
                  <CircleDashed size={12} />
                </div>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={6}>
                <div className="footer-wrapper">
                  <div>
                    Mostrando
                    <span>
                      10 <CaretDown size={6} />
                    </span>
                    de <strong>432</strong> resultados
                  </div>
                  <div className="pagination">
                    <CaretLeft size={8} color="#101828" />1
                    <CaretRight size={8} color="#101828" />
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </ContentContainer>
    </ParceirosContainer>
  )
}
