import { MagnifyingGlass } from 'phosphor-react'

import { SearchInputContainer } from './styles'

export function SearchInput({ ...rest }) {
  return (
    <SearchInputContainer>
      <MagnifyingGlass size={20} />
      <input {...rest} />
    </SearchInputContainer>
  )
}
