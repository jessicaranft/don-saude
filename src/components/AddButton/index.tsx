import { PlusCircle } from 'phosphor-react'

import { AddButtonContainer } from './styles'

interface AddButtonProps {
  title: string
  variant: 'pure' | 'light'
}

export function AddButton({ title, variant }: AddButtonProps) {
  return (
    <AddButtonContainer variant={variant}>
      <PlusCircle size={20} />
      <p>{title}</p>
    </AddButtonContainer>
  )
}
