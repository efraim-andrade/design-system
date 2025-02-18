import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@eamj/react'

export default {
  title: 'Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
