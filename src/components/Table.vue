<template>
  <div class="table">
    <div class="left">
      <div class="left-inner" ref="leftInner">
        <FixedHeaderTable :list="list" :scrollTop="scrollTop"></FixedHeaderTable>
      </div>
    </div>
    <div class="main">
      <FixedHeaderTable class="main-inner" ref="main" :list="list" :scrollTop="scrollTop" :scrollLeft="scrollLeft"></FixedHeaderTable>
    </div>
    <div class="scrollHandler">
        <FixedHeaderTable :list="list" @scrollX="scrollX" @scrollY="scrollY" :fake="true"></FixedHeaderTable>
    </div>
  </div>
</template>

<script>
import FixedHeaderTable from './FixedHeaderTable.vue'

//关于滚动的问题：如果两边联动，会由于设置 scrollTop 触发 scroll 事件而出现循环，并且，由于惯性滚动的存在，一个没滚动完 而被另一个设置，会出现抖动
//所以目前是采用统一的一个透明层代理所有滚动，因而不会出现联动冲突
export default {
  components: {
    FixedHeaderTable
  },
  props: {
    list: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      scrollTop: 0,
      scrollLeft: 0
    }
  },
  mounted () {
  },
  methods: {
    scrollX (x) {
      this.scrollLeft = x
    },
    scrollY (y) {
      this.scrollTop = y
    }
  }
}
</script>

<style lang="less" scoped>
.table {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 1;
  overflow: hidden;
  background-color: #f1f1f1;
  pointer-events: none;
}

.main {
  position: absolute;
  left: 80px;
  width: 100%;
  height: 100%;
  z-index: 11;
  overflow: hidden;
}
.main-inner {
  margin-left: -80px;
}

.left-inner {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 720px;
}

.scrollHandler {
  .main;
  left: 0;
  opacity: 0;
}
</style>
