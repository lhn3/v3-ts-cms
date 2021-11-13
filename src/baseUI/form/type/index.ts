export interface formType {
  type: string,
  label: string,
  placeholder?: any,
  rules?: any,           //规则
  isShow?: boolean,
  options?: Array<any>,
  others?: any,
}

export interface formConfigType {
  formItem?: Array<formType>,
  labelWidth?: string,
  colSpan?: any
}
