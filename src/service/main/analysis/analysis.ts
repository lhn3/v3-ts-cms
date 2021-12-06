import myAxios from '@/service'
import { Response } from '@/service/type'


// enum Enum {
//   goodsCount='/goods/category/count',
//   goodsSale='/goods/category/sale',
//   goodsFavor='/goods/category/favor',
//   addressSale='/goods/address/sale',
// }

export function getAnalysisInfo(url: string) {
  return myAxios.get<Response>({
    url: url
  })
}
