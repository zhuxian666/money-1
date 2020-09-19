<template>
    <div class="tags">
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>
