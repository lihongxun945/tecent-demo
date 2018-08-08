<template>
  <div class="table">
    <div class="left">
      <div class="left-inner" ref="leftInner">
        <FixedHeaderTable :list="list" :scrollTop="scrollTop"></FixedHeaderTable>
      </div>
    </div>
    <FixedHeaderTable class="main" ref="main" :list="list" @scroll="scroll"></FixedHeaderTable>
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

for(var i=0;i<9000;i++) {
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

  //const mainContent = this.$refs.mainContent
  //const fixedLeft = this.$refs.fixedLeft
  //mainContent.addEventListener('scroll', (e) => {
  //  const top = e.currentTarget.scrollTop
  //  fixedLeft.scrollTop = top
  //})
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
  z-index: 100;
  overflow: hidden;
  background-color: #f1f1f1;
  pointer-events: none;
}

.left-inner {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 600px;
}
</style>
