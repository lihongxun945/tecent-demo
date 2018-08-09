<template>
  <div class="form">
    <h2>表单页面</h2>
    <form action="">
      <label>
        <span>收件人</span>
        <Input class="input"></Input>
      </label>
    </form>
  </div>
</template>

<script>
import Input from '@/components/Input'

export default {
  components: {
    Input
  }
}
</script>

<style lang="less" scoped>
.form {
  height: 100%;
  box-sizing: border-box;
}
.input {
  vertical-align: 0px;
}
</style>
