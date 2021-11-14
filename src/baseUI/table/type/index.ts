
export interface tableType {
  props?:string,
  label:string,
  width?:any,
  slotName?:string
}

export interface tableConfigType {
  tableItem:Array<tableType>,
  hasIndex?:boolean,
  hasCheck?:boolean,
  title?:string,
}
