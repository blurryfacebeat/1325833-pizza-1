import staticData from '@/static/pizza.json';
import {
  normalizeDough,
  normalizeSizes,
  normalizeSauce,
  normalizeIngredients
} from '@/common';
import {
  SET_PIZZA_NAME,
  SET_PIZZA_INGREDIENTS,
  SET_PIZZA_SAUCE,
  SET_PIZZA_SIZE,
  SET_PIZZA_DOUGH
} from '@/store/mutation-types';

export default {
  namespaced: true,
  state: {
    doughData: normalizeDough(staticData.dough),
    sauceData: normalizeSauce(staticData.sauces),
    ingredientsData: normalizeIngredients(staticData.ingredients),
    sizesData: normalizeSizes(staticData.sizes),
    pizzaResult: {
      name: '',
      dough: {},
      size: {},
      sauce: {},
      ingredients: {}
    }
  },

  mutations: {
    [SET_PIZZA_NAME](value) {
      this.$set(this.pizzaResult, 'name', value);
    },

    [SET_PIZZA_DOUGH](value) {
      this.$set(this.pizzaResult, 'dough', value);
    },

    [SET_PIZZA_SIZE](value) {
      this.$set(this.pizzaResult, 'size', value);
    },

    [SET_PIZZA_SAUCE](value) {
      this.$set(this.pizzaResult, 'sauce', value);
    },

    [SET_PIZZA_INGREDIENTS](value) {
      this.$set(this.pizzaResult, 'ingredients', value);
    }
  },

  actions: {}
};
