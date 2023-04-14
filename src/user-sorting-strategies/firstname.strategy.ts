import { type ESortOrder } from '../components/types'
import { type IUser } from '../types'
import { firstNameSorter } from './sorters'
import { type UserSortingStrategy } from './usersorting.strategy'

export class FirstNameStrategy implements UserSortingStrategy {
  private readonly _userList: IUser[]
  private readonly _sortOrder: ESortOrder

  constructor (userList: IUser[], sortOrder: ESortOrder) {
    this._userList = userList
    this._sortOrder = sortOrder
  }

  sortUsers (): IUser[] {
    return firstNameSorter(this._userList, this._sortOrder)
  }
}
