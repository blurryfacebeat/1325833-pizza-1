<template>
  <div class="content__result">
    <p>Итого: {{ price }} ₽</p>

    <ButtonWidget
      content="Готовьте!"
      @clickHandler="orderPizza"
      :disabled="isButtonDisabled"
    />
  </div>
</template>

<script>
import ButtonWidget from '@/common/components/ButtonWidget';

export default {
  name: 'BuilderResultPrice',
  components: { ButtonWidget },
  props: {
    price: {
      type: Number,
      required: true
    },

    pizzaName: {
      type: String,
      default: () => {
        return '';
      }
    }
  },
  methods: {
    orderPizza() {
      this.$emit('orderPizza');
    }
  },
  computed: {
    isButtonDisabled() {
      return !this.pizzaName ? true : false;
    }
  }
};
</script>

<style scoped lang="scss"></style>
