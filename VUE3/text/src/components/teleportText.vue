<template>
  <h1>{{result}}</h1>
</template>

<script>
  import { ref } from 'vue'
  export default {
    async setup (props) {
      let result = ref(null)
      await setTimeout(() => {
        result.value = "这里是要展示的异步组件"
      }, 5000);
      return {
        result
      }
    }
  }
</script>

<style>
</style>