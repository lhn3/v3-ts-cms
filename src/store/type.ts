import { ILoginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

//创建一个可以保存所有module的类型
export interface IModuleState{
  login: ILoginState
}

//合并根和module的所有类型
export interface IStoreType extends IRootState,IModuleState{}
