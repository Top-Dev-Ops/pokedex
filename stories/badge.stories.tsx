import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'

import Badge, { BadgePropsType } from '../components/badge'

export default {
  title: 'Atom/Badge',
  component: Badge,
  argTypes: {
    width: {
      control: { type: 'range', min: 420, max: 1600, step: 50 },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: Story<BadgePropsType & { width: number }> = (args) => (
  <div className="bg-stack-4 p-4">
    <Badge {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  label: 'fire',
  background: 'var(--bg-fire)',
}