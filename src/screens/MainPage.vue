<template>
  <div>
    <TheHeader/>
    <div class="lorem-ipsum">
      <!-- eslint-disable max-len -->
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <!-- eslint-enable -->
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'MainPage',
  components: {
    TheHeader,
  },
};

</script>

<style lang="scss">
  .lorem-ipsum {
    max-width: 1080px;
    min-width: 360px;
    margin: 0 auto;
    padding: 40px;
  }
</style>
