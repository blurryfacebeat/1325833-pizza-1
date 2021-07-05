<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough" v-if="isDoughLength">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  :class="['dough__input', `dough__input--${dough.type}`]"
                  v-for="(dough, index) in doughData"
                  :key="dough.name"
                >
                  <input
                    type="radio"
                    name="dough"
                    value="light"
                    class="visually-hidden"
                    :checked="index === 0"
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter" v-if="isSizesLength">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  :class="['diameter__input', `diameter__input--${size.type}`]"
                  v-for="(size, index) in sizesData"
                  :key="size.name"
                >
                  <input
                    type="radio"
                    name="diameter"
                    value="small"
                    class="visually-hidden"
                    :checked="index === 1"
                  />
                  <span>{{ size.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingridients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингридиенты
              </h2>

              <div class="sheet__content ingridients">
                <div class="ingridients__sauce" v-if="isSauceLength">
                  <p>Основной соус:</p>

                  <label
                    class="radio ingridients__input"
                    v-for="(sauce, index) in sauceData"
                    :key="sauce.name"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.value"
                      :checked="index === 0"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingridients__filling" v-if="isIngredientsLength">
                  <p>Начинка:</p>

                  <ul class="ingridients__list">
                    <li
                      class="ingridients__item"
                      v-for="ingredient in ingredientsData"
                      :key="ingredient.name"
                    >
                      <span
                        :class="['filling', `filling--${ingredient.type}`]"
                        >{{ ingredient.name }}</span
                      >

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button button--disabled" disabled>
                Готовьте!
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import staticData from '@/static/pizza.json';
import { normalizeDough } from '@/common/pizza_constructor/normalizeDough';
import { normalizeSauce } from '@/common/pizza_constructor/normalizeSauce';
import { normalizeIngredients } from '@/common/pizza_constructor/normalizeIngredients';
import { normalizeSizes } from '@/common/pizza_constructor/normalizeSizes';

export default {
  name: 'Index.vue',
  data() {
    return {
      doughData: normalizeDough(staticData.dough),
      sauceData: normalizeSauce(staticData.sauces),
      ingredientsData: normalizeIngredients(staticData.ingredients),
      sizesData: normalizeSizes(staticData.sizes)
    };
  },
  computed: {
    isDoughLength() {
      return this.doughData.length;
    },

    isSauceLength() {
      return this.sauceData.length;
    },

    isIngredientsLength() {
      return this.ingredientsData.length;
    },

    isSizesLength() {
      return this.sizesData.length;
    }
  }
};
</script>

<style scoped lang="scss"></style>
