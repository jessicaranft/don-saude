import { InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  labelTitle: string
}

export function Input({ id, labelTitle, ...rest }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={id}>{labelTitle}</label>
      <input id={id} {...rest} />
    </InputContainer>
  )
}
