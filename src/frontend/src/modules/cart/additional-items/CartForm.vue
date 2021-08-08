<template>
  <div class="cart__form">
    <div class="cart-form">
      <label class="cart-form__select">
        <span class="cart-form__label">Получение заказа:</span>

        <select name="test" class="select">
          <option value="1">Заберу сам</option>
          <option value="2">Новый адрес</option>
          <option value="3">Дом</option>
        </select>
      </label>

      <label class="input input--big-label">
        <span>Контактный телефон:</span>
        <InputWidget placeholder="+7 999-999-99-99" name="tel" />
      </label>

      <div class="cart-form__address">
        <span class="cart-form__label">Новый адрес:</span>

        <div class="cart-form__input">
          <InputWidget
            labelContent="Улица*"
            name="street"
            placeholder="Пушкина"
          />
        </div>

        <!--    TODO:    Попробовать переписать input под v-model-->
        <div class="cart-form__input cart-form__input--small">
          <InputWidget
            labelContent="Дом*"
            name="house"
            placeholder="Колотушкина"
          />
        </div>

        <div class="cart-form__input cart-form__input--small">
          <InputWidget
            labelContent="Квартира"
            name="apartment"
            placeholder="15"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputWidget from '@/common/components/InputWidget';
export default {
  name: 'CartForm',
  components: { InputWidget }
};
</script>

<style scoped lang="scss"></style>
