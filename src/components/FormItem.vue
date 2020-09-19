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

</style>
