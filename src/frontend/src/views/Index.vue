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

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  :class="[
                    'dough__input',
                    dough.name === 'Тонкое'
                      ? 'dough__input--light'
                      : 'dough__input--large'
                  ]"
                  v-for="(dough, index) in constructorData.dough"
                  :key="dough.name"
                >
                  <input
                    type="radio"
                    name="dought"
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

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  :class="[
                    'diameter__input',
                    size.name === '23 см'
                      ? 'diameter__input--small'
                      : size.name === '32 см'
                      ? 'diameter__input--normal'
                      : 'diameter__input--big'
                  ]"
                  v-for="(size, index) in constructorData.sizes"
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
                <div class="ingridients__sauce">
                  <p>Основной соус:</p>

                  <label
                    class="radio ingridients__input"
                    v-for="(sauce, index) in constructorData.sauces"
                    :key="sauce.name"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.name === 'Томатный' ? 'tomato' : 'creamy'"
                      :checked="index === 0"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingridients__filling">
                  <p>Начинка:</p>

                  <ul class="ingridients__list">
                    <li
                      class="ingridients__item"
                      v-for="ingredient in constructorData.ingredients"
                      :key="ingredient.name"
                    >
                      <span
                        :class="[
                          'filling',
                          setIngredientClass(ingredient.name)
                        ]"
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

export default {
  name: 'Index.vue',
  mixins: [],
  props: [],
  components: {},
  data() {
    return {
      constructorData: staticData
    };
  },
  mounted() {},
  methods: {
    setIngredientClass(type) {
      let startStr = 'filling--';
      let endStr =
        type === 'Грибы'
          ? 'mushrooms'
          : type === 'Чеддер'
          ? 'cheddar'
          : type === 'Салями'
          ? 'salami'
          : type === 'Ветчина'
          ? 'ham'
          : type === 'Ананас'
          ? 'ananas'
          : type === 'Бекон'
          ? 'bacon'
          : type === 'Лук'
          ? 'onion'
          : type === 'Чили'
          ? 'chile'
          : type === 'Халапеньо'
          ? 'jalapeno'
          : type === 'Маслины'
          ? 'olives'
          : type === 'Томаты'
          ? 'tomatoes'
          : type === 'Лосоь'
          ? 'salmon'
          : type === 'Моцарелла'
          ? 'mozzarella'
          : type === 'Пармезан'
          ? 'parmesan'
          : type === 'Блю чиз'
          ? 'blue_cheese'
          : '';
      return startStr + endStr;
    }
  },
  computed: {},
  watch: {},
  validations: {}
};
</script>

<style scoped lang="scss"></style>
