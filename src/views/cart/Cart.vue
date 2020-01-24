<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div @click="backTopPage" class="back-img" slot="left">
        <img alt="" src="@/assets/img/common/back.svg" />
      </div>
      <div slot="center">
        购物车(
        <span>{{ cartListLength }}</span>
        )
      </div>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list @changShow="changShow"/>
    <cart-delta-item v-show="isShow" @SubToCart="SubToCart"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "./children/CartList";
import CartDeltaItem from "./children/CartDeltaItem"
// Vuex的方法
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Cart",
  data(){
    return {
      isShow : false,
      caritemindex: 0
    }
  },
  computed: {
    // 对象写法可以自己命名
   ...mapGetters(
      ["cartList", "cartListLength"]
    ),
  },
  methods:{
    ...mapMutations(["clearCartList", "setCartList"]),
    backTopPage () {
      this.$router.go(-1)
    },
    changShow(index){
      this.isShow = true;
      this.caritemindex = index;
    },
    // 删除购物车数据
    SubToCart () {
      let index = this.caritemindex
      this.isShow = false;
      this.cartList.splice(index,1);

      this.clearCartList();
    }
  },
  components: { 
    CartList, 
    NavBar , 
    CartDeltaItem
  }
};
</script>

<style scoped>
.back-img {
  padding-top: 8px;
  text-align: center;
}
.nav-bar {
  color: white;
  background-color: #ff8198;
}
</style>
