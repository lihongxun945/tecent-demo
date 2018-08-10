<template>
  <transition name="fade">
    <div class="popup" ref="popup" v-show="show">
      <div class="header">
        <div class="input-wrap">
          <i class="iconfont icon-search"></i>
          <input placeholder="请输入" ref="input" v-model="input"/>
          <a class="iconfont icon-delete1" v-show="!!input" @click="clear"></a>
        </div>
        <a href="#" class="cancel" @click="close">取消</a>
      </div>
      <div class="content" @touchmove="blur">
        <a class="item" v-for="l in filtedList" @click="select(l)">
          <span v-html="highlight(l)"></span>
        </a>
        <div class="empty" v-if="filtedList.length === 0">
          <div class="empty-inner">
            没有找到<strong>"{{input}}"</strong>相关结果~
          </div>
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
    },
    clear () {
      this.input = ''
      this.$refs.input.focus()
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
@height: 32px;
.input-wrap {
  margin-right: 50px;
  position: relative;
}
input {
  height: @height;
  line-height: @height;
  width: 100%;
  -webkit-appearance: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  caret-color: #999;
  padding-left: 28px;
  box-sizing: border-box;
}
.icon-delete1 {
  font-size: 20px;
  position: absolute;
  top: 4px;
  right: 5px;
  color: #888;

  &:active {
    color: #666;
  }
}
.icon-search {
  font-size: 20px;
  position: absolute;
  top: 4px;
  left: 4px;
  color: #888;
}
.cancel {
  color: #1AAD19;
  text-decoration: none;
  margin-left: 8px;
  position: absolute;
  right: 10px;
  top: 12px;
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
  text-decoration: none;
  color: inherit;
  display: block;
  + .item {
    border-top: 1px solid #f1f1f1;
  }

  &:active {
    background-color: #f1f1f1;
  }
}

.empty {
  height: 150px;
  position: relative;
  text-align: center;
  color: #999;
  .empty-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  strong {
    color: #666;
  }
}
</style>

<style>
.popup b {
  color: red;
}
</style>
