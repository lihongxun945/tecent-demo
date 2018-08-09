<template>
  <div class="wrap">
    <TagInput @add="popup" :tags="tags" @del="del"></TagInput>
    <InputPopup ref="popup" @select="select" :tags="tags"></InputPopup>
  </div>
</template>

<script>
import TagInput from '@/components/TagInput'
import InputPopup from '@/components/InputPopup'

export default {
  components: {
    TagInput,
    InputPopup
  },
  data () {
    return {
      input: '',
      tags: [
        '周杰伦',
        '林俊杰'
      ]
    }
  },
  methods: {
    popup () {
      this.$refs.popup.open()
    },
    select (l) {
      this.tags.push(l)
    },
    del (i) {
      this.tags.splice(i,1)
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  display: inline-block;
}
</style>
