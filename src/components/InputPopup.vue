<template>
  <div class="popup" ref="popup">
    <div class="header">
      <input placeholder="请输入" ref="input" v-model="input"/>
      <a href="#" class="cancel" @click="close">取消</a>
    </div>
    <div class="content" @touchmove="blur">
      <div class="item" v-for="l in filtedList" @click="select(l)">
        {{l}}
      </div>
    </div>
  </div>
</template>

<script>

const list = [
  '何炅',
  '谢啦',
  '谢霆锋',
  '谢军',
  '唐嫣',
  '唐老鸭',
  '刘诗诗',
  '周杰伦',
  '周树人',
  '杨幂',
  '赵又廷',
  '谢霆锋',
  '阿娇',
  '黄日华',
  '成龙',
  'Baby',
  '李连杰',
  '周润发',
  '胡歌',
  '马云',
  '马化腾',
  '张小龙'
  ]

export default {
  props: {
    tags: {
      type: Array
    }
  },
  data () {
    return {
      show: false,
      list: list,
      input: ''
    }
  },
  methods: {
    open () {
      //this.show = true // 这是一个异步操作，因此无法focus。ios 策略会组织不是直接由用户触发的focus操作.
      this.$refs.popup.style.display = 'block' // 同步操作，因此没问题
      this.$refs.input.focus()
    },
    close () {
      this.$refs.popup.style.display = 'none'
      this.show = false
    },
    select (l) {
      this.$emit('select', l)
      this.input = ''
      this.close()
    },
    blur () {
      this.$refs.input.blur()
    }
  },
  computed: {
    filtedList () {
      return this.list.filter((d) => {
        if (this.tags.includes(d)) return false
        if (!this.input) return true
        return d.indexOf(this.input) !== -1
      })
    }
  }
}
</script>

<style lang="less" scoped>
.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: none;
}
.header { 
  background-color: #f1f1f1;
  padding: 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000
}
@height: 28px;
input {
  height: @height;
  line-height: @height;
  width: 80%;
  padding: 0 10px;
  -webkit-appearance: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.cancel {
  color: #1AAD19;
  text-decoration: none;
  margin-left: 8px;
}

.content {
  padding: 55px 15px 15px;
  text-align: left;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  box-sizing: border-box;
}
.item {
  padding: 5px;
  + .item {
    border-top: 1px solid #f1f1f1;
  }
}
</style>
