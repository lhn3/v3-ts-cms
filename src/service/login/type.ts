export interface IAccount {
  name: string,
  password: string
}

export interface ILoginResponse<T = any> {
  code: number
  data: T
}
