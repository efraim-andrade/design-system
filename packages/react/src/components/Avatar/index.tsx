import { ComponentProps } from 'react'
import { User } from 'phosphor-react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar({ src }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage src={src} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
