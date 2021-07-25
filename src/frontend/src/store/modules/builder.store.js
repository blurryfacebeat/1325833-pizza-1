import Vue from 'vue';
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
  SET_PIZZA_DOUGH,
  SET_PIZZA_COST
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
      ingredients: {},
      cost: 0,
      quantity: 1
    }
  },

  mutations: {
    [SET_PIZZA_NAME](state, value) {
      Vue.set(state.pizzaResult, 'name', value);
    },

    [SET_PIZZA_DOUGH](state, value) {
      Vue.set(state.pizzaResult, 'dough', value);
    },

    [SET_PIZZA_SIZE](state, value) {
      Vue.set(state.pizzaResult, 'size', value);
    },

    [SET_PIZZA_SAUCE](state, value) {
      Vue.set(state.pizzaResult, 'sauce', value);
    },

    [SET_PIZZA_INGREDIENTS](state, value) {
      Vue.set(state.pizzaResult, 'ingredients', value);
    },

    [SET_PIZZA_COST](state, value) {
      Vue.set(state.pizzaResult, 'cost', value);
    }
  },

  actions: {
    [SET_PIZZA_COST]({ state, commit }) {
      let cost = 0;
      for (let key in state.pizzaResult.ingredients) {
        cost +=
          state.pizzaResult.ingredients[key].price *
          state.pizzaResult.ingredients[key].counter;
      }
      cost +=
        (state.pizzaResult.dough.price + state.pizzaResult.sauce.price) *
        state.pizzaResult.size.multiplier;
      commit(SET_PIZZA_COST, cost);
    }
  }
};
