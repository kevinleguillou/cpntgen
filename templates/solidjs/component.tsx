import { Component } from 'solid-js'
import { {{ componentNameCapitalizedCamelCase }}Props } from '~/{{ workingDirectory }}/{{ componentNameKebabCase }}/{{ componentNameKebabCase }}.interfaces'
import styles from '~/{{ workingDirectory }}/{{ componentNameKebabCase }}/{{ componentNameKebabCase }}.module.scss'

const {{ componentNameCapitalizedCamelCase }}: Component<{{ componentNameCapitalizedCamelCase }}Props> = ({ prop }) => {
  return (
    <div class={styles.{{ componentNameCamelCase }}}>
      Content
    </div>
  )
}

export default {{ componentNameCapitalizedCamelCase }}
