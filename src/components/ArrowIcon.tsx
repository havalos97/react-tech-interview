import ArrowDownIcon from '../assets/arrow_down_icon.svg'
import { ESortOrder } from './types'

interface IProps {
  sortOrder: ESortOrder
}

export function ArrowIcon ({ sortOrder }: IProps) {
  const ArrowIconStyle = {
    marginLeft: '10px',
    filter: 'invert(100%)',
    transform: sortOrder === ESortOrder.DESC ? 'rotate(0deg)' : 'rotate(180deg)'
  }

  return (
    <img src={ArrowDownIcon} width='16px' style={ArrowIconStyle} />
  )
}
