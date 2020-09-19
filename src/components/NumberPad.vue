<template>
    <div class="numberPad">
        <div class="input">0</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="remove">删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button class="clear">清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">OK</button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>
