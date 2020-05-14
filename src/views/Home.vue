<template>
  <div class="home">
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import login from "./login";
export default {
  name: 'Home',
  components: {
    HelloWorld,
    login
  }
}
</script>
