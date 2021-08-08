<template>
  <div class="popup" v-click-outside="closeModal">
    <a @click="closeModal" class="close">
      <span class="visually-hidden">Закрыть попап</span>
    </a>
    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <div class="popup__button">
      <a @click="closeModal" class="button">Отлично, я жду!</a>
    </div>
  </div>
</template>

<script>
import '@/common/directives/click-outside';

export default {
  name: 'ThankfulModal',
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  }
};
</script>

<style scoped lang="scss"></style>
