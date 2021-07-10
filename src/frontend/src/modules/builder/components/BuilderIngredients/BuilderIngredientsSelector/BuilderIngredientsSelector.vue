<template>
  <div class="sheet__content ingridients">
    <div class="ingridients__filling">
      <p>Начинка:</p>

      <ul class="ingridients__list">
        <BuilderIngredientsSelectorItem
          v-for="ingredient in ingredientsData"
          :key="ingredient.name"
          :ingredient="ingredient"
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
  }
};
</script>

<style scoped lang="scss"></style>
