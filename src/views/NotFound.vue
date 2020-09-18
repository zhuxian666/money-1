<template>
   <div class="not-found">
      <h1>404</h1>
      <div>当前页面不存在，请检查网址是否正确</div>
      <div>
         <router-link to="/">返回首页</router-link>
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
.not-found{

}
</style>