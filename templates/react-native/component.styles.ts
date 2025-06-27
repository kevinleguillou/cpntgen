import { StyleSheet } from 'react-native'

import { Theme } from '@theme'

export default ({ colors }: Theme) =>
  StyleSheet.create({
    {{ componentNameCamelCase }}: {
      backgroundColor: 'black'
    },
    text: {
      color: 'white'
    }
  })
