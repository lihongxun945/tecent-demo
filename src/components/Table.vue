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

// mock data
const list = {
  headers: [
   "学号",
   "姓名",
   "性别",
   "生日",
   "籍贯",
   "年龄",
   "工作",
   "学历",
   "爱好",
  ],
  content: []
}

const names = ['张三丰', '李四', '范冰冰', '刘亦菲', '李晨', '吴亦凡', '阿信']

let n = 0
const getName = () => {
  if (n>=names.length-1) n=0
  return names[n++]
}

for(var i=0;i<10000;i++) {
  list.content.push([
    i,
    getName(),
    "男",
    "2000-12",
    "上海市",
    "18",
    "程序员",
    "本科",
    "健身"
  ])
}

export default {
  components: {
    FixedHeaderTable
  },
  data () {
    return {
      scrollTop: 0,
      list: list
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
