<template>
   <div class="not-found">
      <h1>404</h1>
      <div>当前页面不存在，请检查网址是否正确</div>
      <div>
         <router-link to="/">
            <button>返回首页</button>
         </router-link>
      </div>
   </div>
</template>

<script lang=ts>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NotFound extends Vue {

  }
</script>

<style lang="scss" scoped>
   h1{
      font-size: 80px;
      padding: 50px 0 10px;
   }
.not-found{
display: flex;
flex-direction: column;
align-items: center;
}
   button{
      margin: 10px;
   }
</style>