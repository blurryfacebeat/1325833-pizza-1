<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="@/assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        alt="pizza_name"
      />
      <div class="product__text">
        <h2>{{ pizza.name }}</h2>
        <ul>
          <li>{{ `${pizza.size.name}, ${doughTypeToText}` }}</li>
          <li>Соус: {{ pizza.sauce.name.toLowerCase() }}</li>
          <li>
            Начинка:
            <span
              class="ingredient-item"
              v-for="ingredient in pizzaIngredientsToText"
              :key="ingredient"
              >{{ ingredient }}</span
            >
          </li>
        </ul>
      </div>
    </div>

    <CounterWidget
      @updateProductCounter="updateProductCounter"
      :count="pizza.quantity"
    />

    <div class="cart-list__price">
      <b>{{ cost }}₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit" @click="changePizzaItem">
        Изменить
      </button>
    </div>
  </li>
</template>

<script>
import CounterWidget from '@/common/components/CounterWidget';
export default {
  name: 'PizzaItem',
  components: { CounterWidget },
  props: {
    pizza: {
      type: Object,
      required: true
    }
  },
  methods: {
    changePizzaItem() {
      this.$store.dispatch('cart/CHANGE_PIZZA_ITEM', this.pizza);
    },

    updateProductCounter(value) {
      this.$store.commit('cart/UPDATE_PIZZA_COUNTER', {
        name: this.pizza.name,
        value
      });
    }
  },
  computed: {
    doughTypeToText() {
      return this.pizza.dough.type === 'light'
        ? 'на тонком тесте'
        : 'на толстом тесте';
    },

    pizzaIngredientsToText() {
      let arr = [];
      for (let key in this.pizza.ingredients) {
        arr.push(this.pizza.ingredients[key].name.toLowerCase());
      }
      return arr;
    },

    cost() {
      return this.pizza.cost * this.pizza.quantity;
    }
  }
};
</script>

<style scoped lang="scss">
.ingredient-item {
  &:not(:last-child) {
    margin-right: 3px;

    &::after {
      content: ',';
    }
  }
}
</style>
