<template>
  <div id="good-list">
      <GoodsListItem v-for="(item,index) in goodsList" :key="index" :listItem="item" />
      
  </div>
</template>

<script>
import GoodsListItem from '../childComps/GoodsListItem'
export default {
    name:'GoodList',
    components:{
        GoodsListItem
    },
    props:{
        goodsList:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>

</style>