import Vue from 'vue';

Vue.directive('clickOutside', {
  bind(el, binding, vnode) {
    el.clickOnElement = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.expression
          ? vnode.context[binding.expression](event)
          : console.log('Передайте функцию в директиву');
      }
    };
    document.addEventListener('click', el.clickOnElement);
  },

  unbind(el) {
    document.removeEventListener('click', el.clickOnElement);
  }
});
