<template>
  <div class="content__result">
    <p>Итого: {{ pizzaCost }} ₽</p>

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
  props: {
    pizzaResult: {
      type: Object,
      required: true
    }
  },
  methods: {
    orderPizza() {
      this.$emit('orderPizza');
    }
  },
  computed: {
    isNameEmpty() {
      return !this.pizzaResult.name ? true : false;
    },

    isIngredientsEmpty() {
      let isEmpty = true;
      for (let key in this.pizzaResult.ingredients) {
        isEmpty = false;
      }
      return isEmpty;
    },

    pizzaCost() {
      let cost = 0;
      for (let key in this.pizzaResult.ingredients) {
        cost +=
          this.pizzaResult.ingredients[key].price *
          this.pizzaResult.ingredients[key].counter;
      }
      cost +=
        (this.pizzaResult.dough.price + this.pizzaResult.sauce.price) *
        this.pizzaResult.size.multiplier;
      return cost;
    }
  }
};
</script>

<style scoped lang="scss"></style>
