import { {{ componentNameCapitalizedCamelCase }}Props, styles } from '@{{ workingDirectory }}/{{ componentNameKebabCase }}'

const {{ componentNameCapitalizedCamelCase }} = ({ prop }: {{ componentNameCapitalizedCamelCase }}Props) => {
  return (
    <div className={styles.{{ componentNameCamelCase }}}>
      Content
    </div>
  )
}

export default {{ componentNameCapitalizedCamelCase }}
