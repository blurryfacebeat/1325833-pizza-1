<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <AdditionalItem
        v-for="product in additionalItemsList"
        :product="product"
        :key="product.type"
      />
    </ul>
  </div>
</template>

<script>
import AdditionalItem from '@/modules/cart/additional-items/AdditionalItem';
export default {
  name: 'AdditionalItemsContainer',
  components: { AdditionalItem },
  computed: {
    additionalItemsList() {
      return this.$store.state.cart.additionalItems;
    }
  }
};
</script>

<style scoped lang="scss"></style>
