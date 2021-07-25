<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img
        :src="`@/${product.image}`"
        width="39"
        height="60"
        :alt="product.name"
      />
      <span>{{ product.name }}</span>
    </p>
    <div class="additional-list__wrapper">
      <div class="counter additional-list__counter">
        <button type="button" class="counter__button counter__button--minus">
          <span class="visually-hidden">Меньше</span>
        </button>
        <input type="text" name="counter" class="counter__input" value="2" />
        <button
          type="button"
          class="counter__button counter__button--plus counter__button--orange"
        >
          <span class="visually-hidden">Больше</span>
        </button>
      </div>

      <div class="additional-list__price">
        <b>{{ product.price }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'AdditionalItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
