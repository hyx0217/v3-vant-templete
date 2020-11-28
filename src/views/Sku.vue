<template>
  <div>
    <div v-for="(item,index) in list"
         :key="index">
      <span>{{item.k}}</span>
      <button v-for="(ele,i) in item.v"
              :key="i"
              @click="hanlderClick(item.k_s,ele.id)"
              :class="includeObj(activeObject,item.k_s,ele.id)">{{ele.name}}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "Sku",
  setup() {
    const sku = {
      // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      tree: [
        {
          k: "颜色", // skuKeyName：规格类目名称
          k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          v: [
            {
              id: "1", // skuValueId：规格值 id
              name: "红色" // skuValueName：规格值名称
            },
            {
              id: "2",
              name: "蓝色"
            }
          ]
        },
        {
          k: "尺码", // skuKeyName：规格类目名称
          k_s: "s2", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          v: [
            {
              id: "1", // skuValueId：规格值 id
              name: "S" // skuValueName：规格值名称
            },
            {
              id: "2",
              name: "M"
            },
            {
              id: "3",
              name: "L"
            }
          ]
        }
      ],
      // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      list: [
        {
          id: 2259, // skuId
          s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
          s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
          price: 100, // 价格（单位分）
          stock_num: 110 // 当前 sku 组合对应的库存
        },
        {
          id: 2260, // skuId
          s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
          s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
          price: 100, // 价格（单位分）
          stock_num: 110 // 当前 sku 组合对应的库存
        }
      ],
      price: "1.00", // 默认价格（单位元）
      stock_num: 227 // 商品总库存
    };
    const childList = [
      // 商品属性
      {
        k_s: 's1', // 属性id
        k: "颜色", // 属性名
        v: [
          {
            id: 1, // 属性值id
            name: "红", // 属性值名
            price: 1 // 属性值加价
          },
          {
            id: 2,
            name: "蓝",
            price: 1
          }
        ]
      },
      {
        k_s: 's2', // 属性id
        k: "尺码", // 属性名
        v: [
          {
            id: 1, // 属性值id
            name: "S", // 属性值名
            price: 1 // 属性值加价
          },
          {
            id: 2,
            name: "M",
            price: 1
          },
          {
            id: 3,
            name: "L",
            price: 1
          }
        ]
      }
    ];
    // const data = [
    //   { id: "1", specs: ["紫色", "套餐一", "64G"] },
    //   { id: "2", specs: ["紫色", "套餐一", "128G"] },
    //   { id: "3", specs: ["紫色", "套餐二", "128G"] },
    //   { id: "4", specs: ["黑色", "套餐三", "256G"] }
    // ];
    // const commoditySpecs = [
    //   { title: "颜色", list: ["红色", "紫色", "白色", "黑色"] },
    //   { title: "套餐", list: ["套餐一", "套餐二", "套餐三", "套餐四"] },
    //   { title: "内存", list: ["64G", "128G", "256G"] }
    // ];
    const skuList = ref(sku);
    const list = ref(childList);
    const activeObject=reactive({});
    const includeObj=(obj,name,id)=>{ 
      console.log(activeObject,id)
      if(activeObject.name){
         if(activeObject.name.id===id){
            return 'active'
         }
         return ''
      }else{
          return ''
      }
    }
    const hanlderClick=(name,id)=>{
      activeObject[name]={
        id,
      }
    }
    return { skuList, list,hanlderClick,activeObject,includeObj };
  }
});
</script>

<style>
.active{
  background: red!important;
}
</style>