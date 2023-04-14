import { ESortOrder } from '../components/types'
import { type IUser } from '../types'

export const firstNameSorter = (userList: IUser[], sortOrder: ESortOrder) => {
  return userList.sort((a, b) => (
    sortOrder === ESortOrder.ASC
      ? a.name.first.localeCompare(b.name.first)
      : b.name.first.localeCompare(a.name.first)
  ))
}

export const lastNameSorter = (userList: IUser[], sortOrder: ESortOrder) => {
  return userList.sort((a, b) => (
    sortOrder === ESortOrder.ASC
      ? a.name.last.localeCompare(b.name.last)
      : b.name.last.localeCompare(a.name.last)
  ))
}

export const countrySorter = (userList: IUser[], sortOrder: ESortOrder) => {
  return userList.sort((a, b) => (
    sortOrder === ESortOrder.ASC
      ? a.location.country.localeCompare(b.location.country)
      : b.location.country.localeCompare(a.location.country)
  ))
}
