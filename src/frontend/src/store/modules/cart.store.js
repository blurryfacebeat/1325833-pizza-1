import Vue from 'vue';

import {
  UPDATE_ADDITIONAL_COUNTER,
  RESET_CART,
  CHANGE_PIZZA_ITEM,
  UPDATE_PIZZA_COUNTER
} from '@/store/mutation-types';
import { normalAdditionalItemsList } from '@/modules/cart/helpers/normalizeAdditionalItems';

export default {
  namespaced: true,
  state: {
    pizzas: [],
    additionalItems: normalAdditionalItemsList()
  },
  mutations: {
    [UPDATE_ADDITIONAL_COUNTER](state, { type, value }) {
      const requiredElement = state.additionalItems.find(
        (item) => item.type === type
      );
      Vue.set(requiredElement, 'count', value);
    },

    [UPDATE_PIZZA_COUNTER](state, { name, value }) {
      const requiredElement = state.pizzas.find((item) => item.name === name);
      Vue.set(requiredElement, 'quantity', value);
    },

    [RESET_CART](state) {
      state.additionalItems = normalAdditionalItemsList();
      state.pizzas = [];
    }
  },
  actions: {
    [CHANGE_PIZZA_ITEM]({ commit }, value) {
      this.commit('builder/CHANGE_PIZZA_ITEM', value);
    }
  },
  getters: {
    CART_COST(state) {
      let cost = 0;
      if (state.pizzas.length) {
        state.pizzas.forEach((pizza) => {
          cost += pizza.cost * pizza.quantity;
        });
      }
      state.additionalItems.forEach((item) => {
        cost += item.price * item.count;
      });
      return cost;
    }
  }
};
