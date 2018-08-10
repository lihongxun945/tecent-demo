<template>
  <div class="tag-input">
    <div class="input">
      <div class="tags">
        <div class="tag button" v-for="(tag, i) in tags">
          <span>{{tag}}</span>
          <a class="delete" @click="del(i)"><span class="iconfont icon-delete"></span></a>
        </div>
      </div>
      <a :class="'button add ' + (tags.length >= limit ? ' disabled' : '')" @click="add">+</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array
    },
    limit: {
      default: 3
    }
  },
  methods: {
    add () {
      if (this.tags.length >= this.limit) return false
      this.$emit('add')
    },
    del (i) {
      this.$emit('del', i)
    }
  }
}
</script>

<style lang="less" scoped>
@height: 32px;
.tag-input {
  display: inline-block;
  text-align: right;
}

label {
  float: left;
  line-height: @height;
}

.input {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 280px;
  line-height: @height;
  height: @height;
  padding: 0 10px 0 5px;

  input {
    float: left;
    line-height: 30px;
    border: 0;
    width: 60px;
  }

  .tags {
    float: left;
    height: @height;
  }
  .tag {
    display: inline-block;
    line-height: 24px;
    margin: 4px;
    background-color: #1AAD19;
    border-radius: 3px;
    color: white;
    padding-left: 4px;
  }
}

.add {
  display: inline-block;
  background-color: #1AAD19;
  border-radius: 50%;
  height: 24px;
  line-height: 24px;
  color: white;
  font-size: 20px;
  width: 24px;
  text-align: center;

  &.disabled {
    background-color: #ccc;
  }
}

.delete {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  width: 24px;
  text-align: center;

  .iconfont {
    font-size: 20px;
    line-height: 24px;
    vertical-align: -2px;
  }
}

.button {
  background-color: #1AAD19;
  &:active {
    background-color: darken(#1AAD19, 10%);
  }
}
</style>
