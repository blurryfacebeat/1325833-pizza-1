<template>
  <div class="content__constructor">
    <div
      :class="`pizza pizza--foundation--${pizzaResult.dough.size}-${pizzaResult.sauce.value}`"
    >
      <div class="pizza__wrapper">
        <div
          :class="['pizza__filling', `pizza__filling--${key.type}`]"
          v-for="key in pizzaResult.ingredients"
          :key="key.type"
        >
          {{ key.type }}
        </div>
      </div>
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
  },
  methods: {}
};
</script>

<style scoped lang="scss"></style>
