<template>
  <div>
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector
          :doughData="doughData"
          v-if="isDoughLength"
          @setPizzaDough="setPizzaDough"
        />

        <BuilderSizeSelector
          :sizesData="sizesData"
          v-if="isSizesLength"
          @setPizzaSize="setPizzaSize"
        />

        <BuilderIngredients
          :sauceData="sauceData"
          :ingredientsData="ingredientsData"
          v-if="isSauceLength && isIngredientsLength"
          @setPizzaSauce="setPizzaSauce"
          @changeIngredients="changeIngredients"
        />

        <BuilderResult
          @orderPizza="orderPizza"
          @setPizzaName="setPizzaName"
          :pizzaResult="pizzaResult"
        />
      </div>
    </form>
    <ThankfulModal v-if="showThankfulModal" @closeModal="closeThankfulModal" />
  </div>
</template>

<script>
import staticData from '@/static/pizza.json';
import {
  normalizeDough,
  normalizeSizes,
  normalizeSauce,
  normalizeIngredients
} from '@/common';
import BuilderDoughSelector from '@/modules/builder/components/BuilderDoughSelector/BuilderDoughSelector';
import BuilderSizeSelector from '@/modules/builder/components/BuilderSizeSelector/BuilderSizeSelector';
import BuilderIngredients from '@/modules/builder/components/BuilderIngredients/BuilderIngredients';
import BuilderResult from '@/modules/builder/components/BuilderResult/BuilderResult';
import ThankfulModal from '@/modules/builder/modals/ThankfulModal';

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
      showThankfulModal: false,
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
    };
  },
  methods: {
    closeThankfulModal() {
      this.showThankfulModal = false;
    },
    setPizzaName(value) {
      this.$set(this.pizzaResult, 'name', value);
    },

    setPizzaDough(value) {
      this.$set(this.pizzaResult, 'dough', value);
    },

    setPizzaSize(value) {
      this.$set(this.pizzaResult, 'size', value);
    },

    setPizzaSauce(value) {
      this.$set(this.pizzaResult, 'sauce', value);
    },

    changeIngredients(value) {
      this.$set(this.pizzaResult, 'ingredients', value);
    },

    orderPizza() {
      this.showThankfulModal = true;
      console.log(this.pizzaResult);
    }
  },
  computed: {
    isDoughLength() {
      return this.doughData.length;
    },

    isSauceLength() {
      return this.sauceData.length;
    },

    isIngredientsLength() {
      return this.ingredientsData.length;
    },

    isSizesLength() {
      return this.sizesData.length;
    }
  }
};
</script>

<style scoped lang="scss"></style>
