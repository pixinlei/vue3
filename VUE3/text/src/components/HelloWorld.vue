<template>
  <Suspense>
    <template #default>
      <teleportText :time="3000" />
    </template>
    <template #fallback>
      <h1>加载中ing...............</h1>
    </template>
  </Suspense>
</template>

<script>
  import teleportText from './teleportText'
  export default {
    components: {
      teleportText
    }
  }
</script>

<style>
</style>