<template>
  <div class="cart">
    <v-touch v-on:swiperight="swiperright" class="container">
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
      <cart-delta-item v-show="isShow" @SubToCart="SubToCart" @CancelCart="CancelCart" />
    </v-touch>
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
    // 在购物车长按事件产生的函数
    // 删除购物车数据
    SubToCart () {
      let index = this.caritemindex
      this.isShow = false;
      this.cartList.splice(index,1);
      // 更新购物车的商品列表信息
      this.clearCartList();
    },
    // 点击取消按钮
    CancelCart () {
      this.isShow = false;
    },
    // 左边侧滑返回上一页
    swiperright: function () {
      this.$router.go(-1);
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
/* 设置滑动范围的宽高 */
.container{
  width:100vw;
  height:100vh;
}
</style>
