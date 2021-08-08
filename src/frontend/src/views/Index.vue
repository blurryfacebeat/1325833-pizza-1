<template>
  <div>
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector v-if="doughData.length" />

        <BuilderSizeSelector v-if="sizesData.length" />

        <BuilderIngredients v-if="sauceData.length && ingredientsData.length" />

        <BuilderResult />
      </div>
    </form>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BuilderDoughSelector from '@/modules/builder/components/BuilderDoughSelector/BuilderDoughSelector';
import BuilderSizeSelector from '@/modules/builder/components/BuilderSizeSelector/BuilderSizeSelector';
import BuilderIngredients from '@/modules/builder/components/BuilderIngredients/BuilderIngredients';
import BuilderResult from '@/modules/builder/components/BuilderResult/BuilderResult';

export default {
  name: 'Index',
  components: {
    BuilderResult,
    BuilderIngredients,
    BuilderSizeSelector,
    BuilderDoughSelector
  },
  methods: {
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
