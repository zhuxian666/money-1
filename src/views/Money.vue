<template>
    <layout class-prefix="layout">
        <Tags @update:value="record.tags=$event"/>
        <div class="notes">
            <FormItem :value.sync="record.notes"
                      field-name="备注"
                      placeholder="留一个备注吧"/>
        </div>
        <div class="date">
            <FormItem :value.sync="record.createAt"
                      type="date"
                      field-name="日期"
                      placeholder="输入日期"/>
        </div>
        <Tabs :value.sync="record.type"
              :data-source="recordTypeList"/>
        <NumberPad :value.sync="record.amount"
                   @submit="saveRecord"/>
    </layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Tags.vue';
  import FormItem from '@/components/FormItem.vue';
  import Tabs from '@/components/Tabs.vue';
  import NumberPad from '@/components/NumberPad.vue';
  import recordTypeList from '@/constants/recordTypeList';

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

    created() {
      this.$store.commit('fetchRecords');
    }

    saveRecord() {
      if(!this.record.tags || this.record.tags.length===0){
        return window.alert('请至少选择一个标签');
      }
      this.$store.commit('createRecord', this.record);
      this.record.notes = '';
    }

    recordTypeList = recordTypeList;

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
