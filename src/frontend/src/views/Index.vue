<template>
  <div>
    <AppLayout>
      <template #header>
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
      </template>
    </AppLayout>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <BuilderDoughSelector
            :doughData="doughData"
            v-if="isDoughLength"
            @setPizzaDough="setPizzaDough"
          />

          <BuilderSizeSelector
            :sizesData="sizesData"
            v-if="isSizesLength"
            @setPizzaSize="setPizzaSize"
          />

          <BuilderIngredients
            :sauceData="sauceData"
            :ingredientsData="ingredientsData"
            v-if="isSauceLength && isIngredientsLength"
            @setPizzaSauce="setPizzaSauce"
            @changeIngredients="changeIngredients"
          />

          <BuilderResult
            @orderPizza="orderPizza"
            @setPizzaName="setPizzaName"
            :pizzaResult="pizzaResult"
          />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import staticData from '@/static/pizza.json';
import {
  normalizeDough,
  normalizeSizes,
  normalizeSauce,
  normalizeIngredients
} from '@/common';
import AppLayout from '@/layouts/AppLayout';
import BuilderDoughSelector from '@/modules/builder/components/BuilderDoughSelector/BuilderDoughSelector';
import BuilderSizeSelector from '@/modules/builder/components/BuilderSizeSelector/BuilderSizeSelector';
import BuilderIngredients from '@/modules/builder/components/BuilderIngredients/BuilderIngredients';
import BuilderResult from '@/modules/builder/components/BuilderResult/BuilderResult';

export default {
  name: 'Index.vue',
  components: {
    BuilderResult,
    BuilderIngredients,
    BuilderSizeSelector,
    BuilderDoughSelector,
    AppLayout
  },
  data() {
    return {
      doughData: normalizeDough(staticData.dough),
      sauceData: normalizeSauce(staticData.sauces),
      ingredientsData: normalizeIngredients(staticData.ingredients),
      sizesData: normalizeSizes(staticData.sizes),
      pizzaResult: {
        name: '',
        dough: {},
        size: {},
        sauce: {},
        ingredients: {},
        price: 0
      }
    };
  },
  methods: {
    setPizzaName(value) {
      this.pizzaResult.name = value;
    },

    setPizzaDough(value) {
      this.pizzaResult.dough = value;
    },

    setPizzaSize(value) {
      this.pizzaResult.size = value;
    },

    setPizzaSauce(value) {
      this.pizzaResult.sauce = value;
    },

    changeIngredients(value) {
      this.pizzaResult.ingredients = value;
      this.calculatePizzaCost();
    },

    calculatePizzaCost() {
      let price = 0;
      for (let key in this.pizzaResult.ingredients) {
        price +=
          this.pizzaResult.ingredients[key].price *
          this.pizzaResult.ingredients[key].counter;
      }
      price +=
        (this.pizzaResult.dough.price + this.pizzaResult.sauce.price) *
        this.pizzaResult.size.multiplier;
      this.pizzaResult.price = price;
    },

    orderPizza() {
      console.log(this.pizzaResult);
    }
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
  },
  watch: {
    pizzaResult: {
      deep: true,
      handler() {
        this.calculatePizzaCost();
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
