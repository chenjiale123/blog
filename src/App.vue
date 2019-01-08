<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import {
  NavBar,
  Footer
} from '@/components'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

#app {
  background: linear-gradient(
    -45deg, #3eae82, #fed67c
  );
  font-family: 'Roboto', sans-serif;
  color: #FAFAFA;
}
</style>
