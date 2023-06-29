import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  // Positioning

  // Box model
  width: '$16',
  height: '$16',
  borderRadius: '$full',

  // Display
  display: 'inline-block',

  // Others
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',

  display: 'flex',
  color: '$gray800',
  alignItems: 'center',

  justifyContent: 'center',
  backgroundColor: '$gray600',

  svg: {
    width: '$6',
    height: '$6',
  },
})
