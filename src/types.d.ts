export interface IUser {
  gender: TGender
  name: IName
  location: ILocation
  email: string
  login: ILogin
  dob: IDob
  registered: IDob
  phone: string
  cell: string
  id: ID
  picture: IPicture
  nat: string
}

export interface IDob {
  date: Date
  age: number
}

export interface ID {
  name: string
  value: null | string
}

export interface ILocation {
  street: IStreet
  city: string
  state: string
  country: string
  postcode: number | string
  coordinates: ICoordinates
  timezone: ITimezone
}

export interface ICoordinates {
  latitude: string
  longitude: string
}

export interface IStreet {
  number: number
  name: string
}

export interface ITimezone {
  offset: string
  description: string
}

export interface ILogin {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface IName {
  title: TTitle
  first: string
  last: string
}

export interface IPicture {
  large: string
  medium: string
  thumbnail: string
}

export type TGender = 'female' | 'male'

export type TTitle = 'Ms' | 'Mademoiselle' | 'Miss' | 'Monsieur' | 'Mr' | 'Mrs'
