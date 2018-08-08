<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <ul>
      <li>
        <router-link to="/table">表格</router-link>
      </li>
      <li>
        <router-link to="/input">名片输入</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
