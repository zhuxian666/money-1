<template>
    <div>
        <label class="formItem">
            <span class="name">备注</span>
            <input type="text">
        </label>
    </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {

  }
</script>

<style lang="scss" scoped>
    .formItem {
        font-size: 14px;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }
        input {
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>
