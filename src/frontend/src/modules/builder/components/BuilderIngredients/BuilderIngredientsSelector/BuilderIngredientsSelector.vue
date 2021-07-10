<template>
  <div class="sheet__content ingridients">
    <div class="ingridients__filling">
      <p>Начинка:</p>

      <ul class="ingridients__list">
        <BuilderIngredientsSelectorItem
          v-for="ingredient in ingredientsData"
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

export default {
  name: 'BuilderIngredientsSelector',
  components: { BuilderIngredientsSelectorItem },
  props: {
    ingredientsData: {
      type: Array,
      required: true,
      validator: (v) => v.length
    }
  },
  data() {
    return {
      ingredients: {}
    };
  },
  methods: {
    changeIngredients(value) {
      this.ingredients[value.name] = value;
      if (this.ingredients[value.name].counter === 0) {
        delete this.ingredients[value.name];
      }
      this.$emit('changeIngredients', this.ingredients);
    }
  }
};
</script>

<style scoped lang="scss"></style>
