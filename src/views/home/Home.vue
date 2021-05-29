<template>
  <div class="home">
    <GoodList :goodsList="list"/>
  </div>
</template>

<script>
import { getHomeData } from "../../network/home";
import GoodList from './childComps/GoodList.vue';
export default {
  name: "Home",
  data(){
    return{
      list:{}
    }
  },
  components: {GoodList},
  created() {
    this.getHomeData();
  },
  methods: {
    getHomeData() {
      getHomeData().then(
        (value) => {
          console.log(value);
          this.list = value.products
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>
