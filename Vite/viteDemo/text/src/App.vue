<template>
  <div>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script lang="ts">
  import HelloWorld from "/@/components/HelloWorld.vue";
  import "/@/assets/app.css";

  export default {
    name: "App",
    components: {
      HelloWorld,
    },
    mounted() {
      let jspang: string = "11111";
      console.log(jspang);
    },
  };
</script>
