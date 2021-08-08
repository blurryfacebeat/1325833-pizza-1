import Vue from 'vue';

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.__VueClickOutside__ = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.expression
          ? vnode.context[binding.expression](event)
          : console.warn('Вы не передали функцию в директиву!');
      }
    };
    document.addEventListener('click', el.__VueClickOutside__);
  },

  unbind(el) {
    document.removeEventListener('click', el.__VueClickOutside__);
  }
});
