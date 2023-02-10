import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  alignItems: 'center',

  backgroundColor: '$gray900',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
  fontFamily: '$default',
})

export const Input = styled('input', {
  border: 0,
  width: '100%',

  color: '$white',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  background: 'transparent',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})
