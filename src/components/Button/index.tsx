import * as C from './style'

type Props = {
  icon?: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({icon, label, onClick}: Props) => {
  return(
    <C.Container onClick={onClick}>
      {icon &&
        <C.IconArea>
        <C.Icon src={icon}></C.Icon>
      </C.IconArea>
      }
      <C.Label>{label}</C.Label>
    </C.Container>
  )
}