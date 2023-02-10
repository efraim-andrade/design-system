import { ComponentProps, ElementRef, forwardRef } from 'react'

import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...rest }: TextInputProps) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}

        <Input {...rest} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
