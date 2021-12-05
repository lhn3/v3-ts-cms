import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'


export interface IRootState {
  departments: Array<any>
  roles: Array<any>
  menus: Array<any>
}

//创建一个可以保存所有module的类型
export interface IModuleState {
  login: ILoginState
  system: ISystemState
}

//合并根和module的所有类型
export interface IStoreType extends IRootState, IModuleState {
}
