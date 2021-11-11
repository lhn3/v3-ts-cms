import {useStore} from "vuex";
import {computed} from "vue";

//数组对象格式都支持
//传入要使用的函数mapState，mapGetters
//(使用的方法函数，结构的参数数组或对象，模块)
export default function (mapFunc:any,v:any,mapModel:any) {
  //setup中获取store对象
  const store=useStore()
  //获取store.state对象
  let stateFunc:any=''
  if(typeof mapModel==='string' && mapModel.length>0){
    stateFunc=mapFunc(mapModel,v)
  }else {
    stateFunc=mapFunc(v)
  }

  let stateRef:any={}
  //遍历对象所有的键
  Object.keys(stateFunc).forEach((value:any)=>{
    //将原本mapState对象中的函数值转为ref,将this绑定到store上,并将键值对重新添加到新的对象中
    stateRef[value]=computed(stateFunc[value].bind({$store:store}))
  })
  return stateRef
}
