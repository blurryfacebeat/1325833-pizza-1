<template>
  <div class="content__result">
    <p>Итого: {{ pizzaResult.cost }} ₽</p>

    <ButtonWidget
      @click="orderPizza"
      content="Готовьте!"
      :disabled="isNameEmpty || isIngredientsEmpty"
    />
  </div>
</template>

<script>
import ButtonWidget from '@/common/components/ButtonWidget';

export default {
  name: 'BuilderResultPrice',
  components: { ButtonWidget },
  methods: {
    orderPizza() {
      this.$emit('orderPizza');
    }
  },
  computed: {
    pizzaResult() {
      return this.$store.state.builder.pizzaResult;
    },

    isNameEmpty() {
      return !this.pizzaResult.name ?? true;
    },

    isIngredientsEmpty() {
      let isEmpty = true;
      for (let key in this.pizzaResult.ingredients) {
        isEmpty = false;
      }
      return isEmpty;
    }
  }
};
</script>

<style scoped lang="scss"></style>
