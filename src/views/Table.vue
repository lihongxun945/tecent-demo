<template>
  <div class="table-page">
    <my-table :list="list"></my-table>
  </div>
</template>

<script>
import myTable from '@/components/Table.vue'

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



export default {
  components: {
    myTable
  },
  data () {
    return {
      list: list
    }
  },
  created () {
    const count=this.$route.query.count

    const list = this.list
    list.content = []
    for(var i=0;i<count;i++) {
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
  }
}
</script>
