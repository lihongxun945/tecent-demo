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
          <table v-if="Math.abs(currentChunkIndex-index) <= 1">
            <colgroup>
              <col width="80" v-for="h in list.headers">
            </colgroup>
            <tbody>
              <tr v-for="r in chunk">
                <td v-for="d in r">{{d}}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="Math.abs(currentChunkIndex-index) > 1" :style="{ height: (chunkLength*35+1)+'px', width: '100%' }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
    scrollTop: {
      default: 0
    },
    scroll: {
      default: true
    },
    chunkLength: {
      default: 200
    }
  },
  data () {
    return {
      innerScrollTop: 0
    }
  },
  mounted () {
    const mainContent = this.$refs.mainContent
    const self = this
    const trigger = () => {
      const top = self.$refs.mainContent.scrollTop
      self.$emit('scroll', top)
      this.innerScrollTop = top
    }

    // QQ浏览器惯性滚动bug
    if (!/QQ/.test(navigator.userAgent)) {
      mainContent.addEventListener('scroll', trigger)
      mainContent.addEventListener('scrollend', trigger)
    } else {
      mainContent.addEventListener('touchmove', trigger)
    }
    console.log(this.chunks)
  },
  watch: {
    scrollTop (v) {
      this.$refs.mainContent.scrollTop = v
    }
  },
  computed: {
    chunks () {
      const result = []
      const arr = this.list.content
      for (var i=0; i<arr.length; i+=this.chunkLength) {
        result.push(arr.slice(i, i+this.chunkLength))
      }
      return result
    },
    currentChunkIndex () {
      const r = parseInt(this.innerScrollTop / (this.chunkLength*35+1))
      return r
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
  td, th {
    line-height: 32px;
    border-spacing: 0;
    border: 1px solid #ccc;
  }
}
.main-content {
  position: absolute;
  top: 32px;
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
