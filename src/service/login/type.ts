export interface IAccount {
  name: string,
  password: string,
  isRememberKey: boolean
}

export interface ILoginResponse<T = any> {
  code: number
  data: T
}
