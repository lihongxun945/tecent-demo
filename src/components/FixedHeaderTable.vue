<template>
  <div class="content-wrap" ref="contentWrap">
    <div class="content-wrap-inner">
      <div class="fixed-header">
        <table>
          <colgroup>
            <col width="80" v-for="h in list.headers">
          </colgroup>
          <tr>
            <th v-for="h in list.headers">{{h}}</th>
          </tr>
        </table>
      </div>
      <div class="main-content" ref="mainContent">
        <div v-for="(chunk, index) in chunks">
          <table v-if="!fake && showChunk(index)">
            <colgroup>
              <col width="80" v-for="h in list.headers">
            </colgroup>
            <tbody>
              <tr v-for="r in chunk">
                <td v-for="d in r">{{d}}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="fake || !showChunk(index)" :style="{ height: (chunkLength*rowHeight+1)+'px', width: '100%' }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const rowHeight = 35 // TODO: 根据DOM计算高度

export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
    scrollTop: {
      default: 0
    },
    scrollLeft: {
      default: 0
    },
    scroll: {
      default: true
    },
    chunkLength: {
      default: 200
    },
    fake: {
      default: false
    }
  },
  data () {
    return {
      innerScrollTop: 0,
      rowHeight: rowHeight
    }
  },
  mounted () {
    const mainContent = this.$refs.mainContent
    const contentWrap = this.$refs.contentWrap
    const self = this
    const scrollY = () => {
      const top = mainContent.scrollTop
      self.$emit('scrollY', top)
      this.innerScrollTop = top
    }
    const scrollX = () => {
      const left = contentWrap.scrollLeft
      self.$emit('scrollX', left)
    }

    // QQ浏览器滚动bug
    if (!/QQ/.test(navigator.userAgent)) {
      mainContent.addEventListener('scroll', scrollY)
      contentWrap.addEventListener('scroll', scrollX)
    } else {
      mainContent.addEventListener('touchmove', scrollY)
      contentWrap.addEventListener('touchmove', scrollX)
    }
  },
  watch: {
    scrollTop (v) {
      this.$refs.mainContent.scrollTop = v
    },
    scrollLeft (v) {
      console.log(v)
      this.$refs.contentWrap.scrollLeft = v
    }
  },
  computed: {
    // 内容分段，以提升显示效果
    // 每次只显示三段内容，其他全部以空DIV代替
    chunks () {
      const result = []
      const arr = this.list.content
      for (var i=0; i<arr.length; i+=this.chunkLength) {
        result.push(arr.slice(i, i+this.chunkLength))
      }
      return result
    },
    currentChunkIndex () {
      const r = parseInt(this.innerScrollTop / (this.chunkLength*this.rowHeight+1))
      return r
    }
  },
  methods: {
    // 只显示当前chunk和上下总共三个chunk的内容
    showChunk (index) {
      return Math.abs(this.currentChunkIndex-index) <= 1
    }
  }
}
</script>

<style lang="less" scoped>
.content-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.content-wrap-inner {
  position: absolute;
  width: 720px;
  height: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
  margin-top: -1px;
  td, th {
    line-height: 32px;
    border-spacing: 0;
    border: 1px solid #ccc;
  }
}
.main-content {
  position: absolute;
  top: 35px;
  bottom: 0;
  width: 100%;
  left: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  th {
    visibility: hidden;
  }
}
.fixed-header {
  position: absolute;
  background-color: #f1f1f1;
  z-index: 10;
}
</style>
