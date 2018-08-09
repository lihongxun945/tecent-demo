<template>
  <transition name="fade">
    <div class="popup" ref="popup" v-show="show">
      <div class="header">
        <input placeholder="请输入" ref="input" v-model="input"/>
        <a href="#" class="cancel" @click="close">取消</a>
      </div>
      <div class="content" @touchmove="blur">
        <div class="item" v-for="l in filtedList" @click="select(l)">
          <span v-html="highlight(l)"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

// mock data
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
      this.show = true // 这是一个异步操作，因此无法focus。ios 策略会组织不是直接由用户触发的focus操作.
      const popup = this.$refs.popup
      const className = popup.className
      popup.style.display = 'block' // 同步操作，强制显示
      popup.className += ' fade-enter'
      this.$refs.input.focus()

      this.$nextTick(() => {
        popup.className += ' fade-enter-active'
      })

      setTimeout(() => {
        popup.className = className
      }, 500)

    },
    close () {
      this.show = false
    },
    select (l) {
      this.$emit('select', l)
      this.input = ''
      this.close()
      this.blur()
    },
    blur () {
      this.$refs.input.blur()
    },
    highlight (t) {
      if (!t) return t
      return t.replace(this.input, '<b>'+this.input+'</b>')
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
  },

  
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
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;

  .header {
    transition: all .3s;
  }
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  top: 30px;
  .header {
    top: 30px;
  }
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
  font-size: 16px;
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

<style>
.popup b {
  color: red;
}
</style>
