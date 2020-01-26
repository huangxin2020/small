<template>
  <div class='Delta-item'>
      <button class="Delete" @click="DeltaItem">删除</button>
      <button class="cancel" @click="cancelop">取消</button>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
       };
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      DeltaItem() {
        this.$emit("SubToCart");
      },
      cancelop() {
        this.$emit("CancelCart")
      }
    }
  }
</script>
<style scoped>
    .Delta-item{
      width: 220px;
      height: 156px;
      border-radius: .4rem;
      font-size: 16px;
      text-align: center;
      position: fixed;
      z-index: 1000;
      top: 50%;
      left: 50%;
      margin: auto;
      /* padding: 13px 15px; */
      transform: translate(-50%, -50%);
      color: white;
      background-color: #f0f0f0;
      overflow: hidden;
      padding: 0 8px;
    }
    button {
      font-size: 14px;
      width: 100%;
      height: 50%;
      border-style: none;
      background-color: #f0f0f0;
      color: #000;
    }
    .Delete {
      border-bottom: 1px solid 
    }
</style>