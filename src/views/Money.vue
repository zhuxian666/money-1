<template>
    <layout>
        <Tags/>
        <FormItem/>
        <Tabs/>
        <NumberPad/>
    </layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Tags.vue';
  import FormItem from '@/components/FormItem.vue';
  import Tabs from '@/components/Tabs.vue';
  import NumberPad from '@/components/NumberPad.vue';

  @Component({
    components: {NumberPad, Tabs, FormItem, Tags}
  })
  export default class Money extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>
