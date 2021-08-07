<template>
  <div class="sheet__content ingridients">
    <div class="ingridients__filling">
      <p>Начинка:</p>

      <ul class="ingridients__list">
        <BuilderIngredientsSelectorItem
          v-for="ingredient in ingredientsList"
          :key="ingredient.name"
          :ingredient="ingredient"
          @changeIngredients="changeIngredients"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import BuilderIngredientsSelectorItem from '@/modules/builder/components/BuilderIngredients/BuilderIngredientsSelector/BuilderIngredientsSelectorItem';
import { mapState } from 'vuex';
import { eventBus } from '@/main';

export default {
  name: 'BuilderIngredientsSelector',
  components: { BuilderIngredientsSelectorItem },
  data() {
    return {
      ingredients: {}
    };
  },
  mounted() {
    eventBus.$on('addPizzaInCart', () => {
      this.ingredients = {};
    });
  },
  methods: {
    changeIngredients(value) {
      this.$set(this.ingredients, value.name, value);
      if (this.ingredients[value.name].counter === 0) {
        this.$delete(this.ingredients, value.name);
      }
      this.$store.commit('builder/SET_PIZZA_INGREDIENTS', this.ingredients);
    }
  },
  computed: {
    ...mapState('builder', {
      ingredientsList: 'ingredientsData'
    })
  }
};
</script>

<style scoped lang="scss"></style>
