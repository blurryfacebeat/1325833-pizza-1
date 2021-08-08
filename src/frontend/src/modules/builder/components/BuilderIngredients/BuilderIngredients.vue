<template>
  <div class="content__ingridients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <BuilderSauceSelector />

      <BuilderIngredientsSelector />
    </div>
  </div>
</template>

<script>
import BuilderSauceSelector from '@/modules/builder/components/BuilderIngredients/BuilderSauceSelector/BuilderSauceSelector';
import BuilderIngredientsSelector from '@/modules/builder/components/BuilderIngredients/BuilderIngredientsSelector/BuilderIngredientsSelector';

export default {
  name: 'BuilderIngredients',
  components: { BuilderIngredientsSelector, BuilderSauceSelector }
};
</script>

<style scoped lang="scss"></style>
