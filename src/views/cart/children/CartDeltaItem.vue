<template>
  <div class='Delta-item'>
      <div>是否确定要删除商品！</div>
      <button @click="DeltaItem">确定</button>
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
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style scoped>
    .Delta-item{
        font-size: 16px;
        text-align: center;
        position: fixed;
        z-index: 1000;
        top: 50%;
        left: 50%;
        margin: auto;
        padding: 13px 15px;
        transform: translate(-50%, -50%);
        color: white;
        background-color: rgba(0, 0, 0, 0.75);
    }
    .Delta-item div{
        width: 100%;
        height: 80%;
    }
    .Delta-item button {
        margin: 0 auto;
        background-color: #ff8198;
        color: white;
    }
</style>