import { type ESortOrder } from '../components/types'
import { type IUser } from '../types'
import { lastNameSorter } from './sorters'
import { type UserSortingStrategy } from './usersorting.strategy'

export class LastNameStrategy implements UserSortingStrategy {
  private readonly _userList: IUser[]
  private readonly _sortOrder: ESortOrder

  constructor (userList: IUser[], sortOrder: ESortOrder) {
    this._userList = userList
    this._sortOrder = sortOrder
  }

  sortUsers (): IUser[] {
    return lastNameSorter(this._userList, this._sortOrder)
  }
}
