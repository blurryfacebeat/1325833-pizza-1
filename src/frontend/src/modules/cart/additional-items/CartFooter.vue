<template>
  <section class="footer">
    <div class="footer__more">
      <router-link to="/" class="button button--border button--arrow"
        >Хочу еще одну</router-link
      >
    </div>
    <p class="footer__text">
      Перейти к конструктору<br />чтоб собрать ещё одну пиццу
    </p>
    <div class="footer__price">
      <b>Итого: {{ cost }} ₽</b>
    </div>

    <div class="footer__submit">
      <ButtonWidget content="Оформить заказ" @click="openThankfulModal" />
    </div>
  </section>
</template>

<script>
import ButtonWidget from '@/common/components/ButtonWidget';
export default {
  name: 'CartFooter',
  components: { ButtonWidget },
  methods: {
    resetCart() {
      this.$store.commit('cart/RESET_CART', []);
    },
    openThankfulModal() {
      this.$emit('openThankfulModal');
      this.resetCart();
    }
  },
  computed: {
    cost() {
      return this.$store.getters['cart/CART_COST'];
    }
  }
};
</script>

<style scoped lang="scss"></style>
