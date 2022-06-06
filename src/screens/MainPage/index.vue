<template>
  <div>
    <TheHeader/>
    <ComponentsDemo/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import ComponentsDemo from './ComponentsDemo';

export default {
  name: 'MainPage',
  components: {
    TheHeader,
    ComponentsDemo,
  },
};

</script>

<style lang="scss">
  .main-page-section {
    max-width: 1080px;
    min-width: 360px;
    margin: 0 auto;
    padding: 20px 40px;
  }
</style>
