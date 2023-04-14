import { type IUser } from '../types'
import { type UserSortingStrategy } from './usersorting.strategy'

export class NoneStrategy implements UserSortingStrategy {
  private readonly _userList: IUser[]

  constructor (userList: IUser[]) {
    this._userList = userList
  }

  sortUsers (): IUser[] {
    return this._userList
  }
}
