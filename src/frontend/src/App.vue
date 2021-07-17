<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Index from '@/views/Index.vue';

export default {
  name: 'App',
  components: { Index },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'DefaultLayout';
      return () => import(`@/layouts/${layout}.vue`);
    }
  }
};
</script>

<style lang="scss">
@import '~@/assets/scss/app';
</style>
