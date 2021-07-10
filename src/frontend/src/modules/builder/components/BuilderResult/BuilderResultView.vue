<template>
  <div class="content__constructor">
    <div
      :class="`pizza pizza--foundation--${pizzaResult.dough.size}-${pizzaResult.sauce.value}`"
    >
      <div class="pizza__wrapper"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuilderResultView',
  props: {
    pizzaResult: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
