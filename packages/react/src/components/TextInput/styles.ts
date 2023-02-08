import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  alignItems: 'baseline',

  backgroundColor: '$gray900',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
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

  '&:placeholder': {
    color: '$gray400',
  },
})
