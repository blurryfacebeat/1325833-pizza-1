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
    openThankfulModal() {
      this.$emit('openThankfulModal');
    }
  },
  computed: {
    cost() {
      return this.$store.state.cart.orderFullCost;
    }
  }
};
</script>

<style scoped lang="scss"></style>
