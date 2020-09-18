<template>
    <div class="layout-wapper" :class="{[classPrefix+'-wapper']: classPrefix}">
        <div class="content" :class="classPrefix && `${classPrefix}-wapper`">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang=ts>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component({
  })
  export default class Layout extends Vue {
    @Prop(String) classPrefix?: string

  }
</script>

<style scoped>

</style>