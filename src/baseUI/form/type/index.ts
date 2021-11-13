export interface formType {
  type: string,
  label: string,
  field: string,         //绑定字段

  placeholder?: any,
  rules?: any,           //规则
  show?: boolean,
  options?: Array<any>,
  others?: any,
}

export interface formConfigType {
  formItem?: Array<formType>,
  labelWidth?: string,
  colSpan?: any
}
