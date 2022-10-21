import '../styles/globals.css'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    clearable: false,
    list: [
      {
        name: 'Dark',
        class: ['dark'],
        color: 'var(--bg-stack-1)'
      },
      {
        name: 'Light',
        class: [],
        color: 'var(--bg-stack-1)',
        default: true
      },
    ]
  }
}