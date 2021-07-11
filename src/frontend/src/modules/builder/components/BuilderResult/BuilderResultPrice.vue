<template>
  <div class="content__result">
    <p>Итого: {{ pizzaResult.price }} ₽</p>

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
  mounted() {},
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
    }
  }
};
</script>

<style scoped lang="scss"></style>
