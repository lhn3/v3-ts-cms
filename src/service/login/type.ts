
export interface IAccount {
  name:string,
  password:string
}

export interface ILoginResponse {
  code: number
  data: {
    id:number,
    name:string,
    token:string
  }
}
