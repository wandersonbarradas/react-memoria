import { type } from '@testing-library/user-event/dist/type'
import * as C from './style'

type Props = {
  value:  string;
  label: string;
}

export const InfoItem = ({label, value}: Props) => {
  return(
    <C.Container>
      <C.Label>{label}</C.Label>
      <C.Value>{value}</C.Value>
    </C.Container>
  )
}