<template>
  <div id="goods-list-item">
      <img :src="listItem.coverImg" alt="">
      <span>{{listItem.name}}</span>
      <span>￥{{listItem.price}}</span>
      <div></div>
  </div>
</template>

<script>
export default {
name:'GoodsListItem',
props:{
    listItem:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style scoped>
#goods-list-item img{
    width: 200px;
    height: 200px;
}
</style>