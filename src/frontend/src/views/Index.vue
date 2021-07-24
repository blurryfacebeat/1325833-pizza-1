<template>
  <div>
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector v-if="doughData.length" />

        <BuilderSizeSelector v-if="sizesData.length" />

        <BuilderIngredients v-if="sauceData.length && ingredientsData.length" />

        <BuilderResult @orderPizza="orderPizza" />
      </div>
    </form>
    <ThankfulModal v-if="showThankfulModal" @closeModal="closeThankfulModal" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BuilderDoughSelector from '@/modules/builder/components/BuilderDoughSelector/BuilderDoughSelector';
import BuilderSizeSelector from '@/modules/builder/components/BuilderSizeSelector/BuilderSizeSelector';
import BuilderIngredients from '@/modules/builder/components/BuilderIngredients/BuilderIngredients';
import BuilderResult from '@/modules/builder/components/BuilderResult/BuilderResult';
const ThankfulModal = () =>
  import(
    /* webpackChunkName: 'ThankfulModal' */ '@/modules/builder/modals/ThankfulModal'
  );

export default {
  name: 'Index',
  components: {
    ThankfulModal,
    BuilderResult,
    BuilderIngredients,
    BuilderSizeSelector,
    BuilderDoughSelector
  },
  data() {
    return {
      showThankfulModal: false
    };
  },
  methods: {
    closeThankfulModal() {
      this.showThankfulModal = false;
    },

    orderPizza() {
      this.showThankfulModal = true;
      console.log(this.pizzaResult);
    }
  },
  computed: {
    ...mapState('builder', [
      'doughData',
      'sauceData',
      'ingredientsData',
      'sizesData'
    ])
  }
};
</script>

<style scoped lang="scss"></style>
