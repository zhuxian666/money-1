<template>
    <layout class-prefix="layout">
        <Tags/>
        <FormItem/>
        <Tabs/>
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        {{record.amount}}
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
    get recordList() {
      return this.$store.state.recordList;
    }

    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0, createAt: new Date().toISOString()
    };

    saveRecord(){
      // this.$store.commit('createRecord',this.record)
    }


  }
</script>

<style lang="scss" scoped>
    ::v-deep .layout-content {
        display: flex;
        flex-direction: column;
        align-content: flex-end;
    }

    .notes {
        padding: 12px 0;
    }
</style>
