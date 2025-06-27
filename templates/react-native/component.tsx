import {
  Text,
  View
} from 'react-native'

import { {{ componentNameCapitalizedCamelCase }}Props } from '@{{ workingDirectory }}/{{ componentNameKebabCase }}'
import stylesGenerator from '@{{ workingDirectory }}/{{ componentNameKebabCase }}/{{ componentNameKebabCase }}.styles'
import { useMemoizedTheme } from '@theme'

const {{ componentNameCapitalizedCamelCase }} = ({ prop }: {{ componentNameCapitalizedCamelCase }}Props) => {
  const { styles } = useMemoizedTheme(stylesGenerator)

  return (
    <View style={styles.{{ componentNameCamelCase }}}>
      <Text style={styles.text}>
        text
      </Text>
    </View>
  )
}

export default {{ componentNameCapitalizedCamelCase }}
