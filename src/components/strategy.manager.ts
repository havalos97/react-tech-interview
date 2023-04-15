import { type IUser } from '../types'
import { CountryStrategy } from '../user-sorting-strategies/country.strategy'
import { FirstNameStrategy } from '../user-sorting-strategies/firstname.strategy'
import { LastNameStrategy } from '../user-sorting-strategies/lastname.strategy'
import { NoneStrategy } from '../user-sorting-strategies/none.strategy'
import { type UserSortingStrategy } from '../user-sorting-strategies/usersorting.strategy'
import { ESortBy, type ESortOrder } from './types'

export class StrategyManager {
  private readonly _strategy: UserSortingStrategy

  constructor (userList: IUser[], sortBy: ESortBy, sortOrder: ESortOrder) {
    switch (sortBy) {
      case ESortBy.FIRST_NAME:
        this._strategy = new FirstNameStrategy(userList, sortOrder)
        break
      case ESortBy.LAST_NAME:
        this._strategy = new LastNameStrategy(userList, sortOrder)
        break
      case ESortBy.COUNTRY:
        this._strategy = new CountryStrategy(userList, sortOrder)
        break
      default:
        this._strategy = new NoneStrategy(userList)
    }
  }

  sortUsers (): IUser[] {
    return this._strategy.sortUsers()
  }
}
