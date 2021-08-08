<template>
  <div>
    <div class="sheet cart__empty" v-if="!pizzasList.length">
      <p>В корзине нет ни одного товара</p>
    </div>

    <ul class="cart-list sheet" v-else>
      <PizzaItem v-for="(pizza, idx) in pizzasList" :key="idx" :pizza="pizza" />
    </ul>
  </div>
</template>

<script>
import PizzaItem from '@/modules/cart/components/PizzaItem';

export default {
  name: 'PizzasContainer',
  components: { PizzaItem },
  computed: {
    pizzasList() {
      return this.$store.state.cart.pizzas;
    }
  }
};
</script>

<style scoped lang="scss"></style>
