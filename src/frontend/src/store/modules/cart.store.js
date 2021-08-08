import Vue from 'vue';

import {
  UPDATE_ADDITIONAL_COUNTER,
  RESET_CART,
  CHANGE_PIZZA_ITEM,
  UPDATE_PIZZA_COUNTER,
  ADD_PIZZA_IN_CART,
  SET_PIZZA_COST,
  RESET_PIZZA_STATE
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
    },

    [ADD_PIZZA_IN_CART](state, value) {
      state.pizzas.push(value);
    }
  },
  actions: {
    [CHANGE_PIZZA_ITEM]({ commit }, value) {
      this.commit('builder/CHANGE_PIZZA_ITEM', value);
    },

    [ADD_PIZZA_IN_CART]({ rootState, rootGetters, commit }) {
      commit(ADD_PIZZA_IN_CART, {
        ...rootState.builder.pizzaResult,
        cost: rootGetters['builder/pizzaCost'],
        quantity: 1
      });
      commit(
        'builder/RESET_PIZZA_STATE',
        {
          ...rootState.builder.pizzaResult,
          name: '',
          ingredients: {},
          quantity: 1
        },
        { root: true }
      );
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
