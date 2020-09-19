<template>
    <div class="nav">
        <router-link class="item" active-class="selected" to="/money">
<!--            <svg>-->
<!--                <use xlink:href="#jiaotong"/>-->
<!--            </svg>-->
            记账
        </router-link>
        <router-link class="item" active-class="selected" to="/label">
            标签
        </router-link>
        <router-link class="item" active-class="selected" to="/statistics">
            统计
        </router-link>
    </div>
</template>

<script lang=ts>
  import Vue from 'vue';

  import {Component} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .nav {
        @extend %outerShadow;
        display: flex;
        flex-direction: row;
        font-size: 12px;


        > .item {
            padding: 2px 0;
            width: 33.33333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;


            .icon {
                width: 32px;
                height: 32px;
            }
        }

        > .item.selected {
            color: $color-highlight;
        }
    }
</style>
