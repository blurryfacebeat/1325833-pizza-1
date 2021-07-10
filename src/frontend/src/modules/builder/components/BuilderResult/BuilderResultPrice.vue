<template>
  <div class="content__result">
    <p>Итого: {{ price }} ₽</p>

    <ButtonWidget content="Готовьте!" @clickHandler="orderPizza" />
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
    }
  },
  methods: {
    orderPizza() {
      this.$emit('orderPizza');
    }
  }
};
</script>

<style scoped lang="scss"></style>
