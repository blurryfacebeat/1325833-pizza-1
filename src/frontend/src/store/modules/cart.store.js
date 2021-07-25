import Vue from 'vue';

import additionalItemsList from '@/static/misc.json';
import {
  ADD_PIZZA_IN_CART,
  CALCULATE_ORDER_COST
} from '@/store/mutation-types';

export default {
  namespaced: true,
  state: {
    pizzas: [],
    orderFullCost: 0,
    additionalItems: additionalItemsList
  },
  mutations: {
    [ADD_PIZZA_IN_CART](state, value) {}
  },
  actions: {}
};
