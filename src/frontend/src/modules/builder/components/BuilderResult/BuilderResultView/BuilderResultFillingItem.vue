<template>
  <div
    :class="[
      'pizza__filling',
      `pizza__filling--${ingredient.type}`,
      setIngredientCounterClass
    ]"
  ></div>
</template>

<script>
export default {
  name: 'BuilderResultFillingItem',
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  },
  computed: {
    setIngredientCounterClass() {
      return this.ingredient.counter === 2
        ? 'pizza__filling--second'
        : this.ingredient.counter === 3
        ? 'pizza__filling--third'
        : '';
    }
  }
};
</script>

<style scoped lang="scss"></style>
