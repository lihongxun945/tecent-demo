<template>
  <div class="table">
    <div class="left">
      <div class="left-inner" ref="leftInner">
        <FixedHeaderTable :list="list" :scrollTop="scrollTop"></FixedHeaderTable>
      </div>
    </div>
    <div class="main">
      <FixedHeaderTable class="main-inner" ref="main" :list="list" @scroll="scroll"></FixedHeaderTable>
    </div>
  </div>
</template>

<script>
import FixedHeaderTable from './FixedHeaderTable.vue'
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
      scrollTop: 0
    }
  },
  mounted () {
  },
  methods: {
    scroll (s) {
      this.scrollTop = s
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
</style>
