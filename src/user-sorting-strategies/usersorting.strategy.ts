import { type IUser } from '../types'

export interface UserSortingStrategy {
  sortUsers: () => IUser[]
}
