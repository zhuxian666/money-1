<template>
    <ul class="tabs">
        <li>支出</li>
        <li>收入</li>
    </ul>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {

  }
</script>

<style lang="scss" scoped>
    .tabs {
        background: #C4C4C4;
        display: flex;
        text-align: center;
        font-size: 24px;
        &-item {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>
