<template>
  <MainPage/>
</template>

<script>
import MainPage from '@/screens/MainPage';

export default {
  name: 'App',
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: rgb(0, 0, 71);
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
