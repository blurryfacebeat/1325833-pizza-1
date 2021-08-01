import Vue from 'vue';

import {
  ADD_PIZZA_IN_CART,
  UPDATE_ADDITIONAL_COUNTER
} from '@/store/mutation-types';
import { normalAdditionalItemsList } from '@/modules/cart/helpers/normalizeAdditionalItems';

export default {
  namespaced: true,
  state: {
    pizzas: [],
    orderFullCost: 0,
    additionalItems: normalAdditionalItemsList()
  },
  mutations: {
    [ADD_PIZZA_IN_CART](state, value) {
      state.pizzas.push(value);
    },
    [UPDATE_ADDITIONAL_COUNTER](state, { type, value }) {
      const requiredElement = state.additionalItems.find(
        (item) => item.type === type
      );
      Vue.set(requiredElement, 'count', value);
    }
  },
  actions: {}
};
