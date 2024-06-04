import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to: string
  onClick?: () => void
  children: JSX.Element
  variant?: 'primary' | 'secundary'
}
const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer to="" type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
