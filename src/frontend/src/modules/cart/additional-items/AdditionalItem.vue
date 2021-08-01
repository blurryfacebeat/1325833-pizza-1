<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="product.image" width="39" height="60" :alt="product.name" />
      <span>{{ product.name }}</span>
    </p>
    <div class="additional-list__wrapper">
      <CounterWidget
        :count="product.count"
        @updateProductCounter="updateProductCounter"
      />

      <div class="additional-list__price">
        <b>{{ additionalItemPrice }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import CounterWidget from '@/common/components/CounterWidget';

export default {
  name: 'AdditionalItem',
  components: { CounterWidget },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateProductCounter(value) {
      this.$store.commit('cart/UPDATE_ADDITIONAL_COUNTER', {
        type: this.product.type,
        value
      });
    }
  },
  computed: {
    additionalItemPrice() {
      return this.product.count * this.product.price;
    }
  }
};
</script>

<style scoped lang="scss"></style>
