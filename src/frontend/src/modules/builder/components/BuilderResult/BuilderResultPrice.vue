<template>
  <div class="content__result">
    <p>Итого: {{ pizzaCost }} ₽</p>

    <ButtonWidget
      @click="addPizzaToCart"
      content="Готовьте!"
      :disabled="isNameEmpty || isIngredientsEmpty"
    />
  </div>
</template>

<script>
import { eventBus } from '@/main';
import ButtonWidget from '@/common/components/ButtonWidget';

export default {
  name: 'BuilderResultPrice',
  components: { ButtonWidget },
  methods: {
    addPizzaToCart() {
      if (
        this.$store.state.cart.pizzas.find(
          (item) => item.name === this.pizzaResult.name
        )
      ) {
        window.alert('Пицца с таким названием уже есть в корзине!');
        return false;
      } else {
        this.$store.dispatch('cart/ADD_PIZZA_IN_CART');
        eventBus.$emit('addPizzaInCart');
      }
    }
  },
  computed: {
    pizzaCost() {
      return this.$store.getters['builder/pizzaCost'];
    },

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
