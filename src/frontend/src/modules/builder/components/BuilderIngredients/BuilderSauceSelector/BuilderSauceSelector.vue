<template>
  <div class="ingridients__sauce">
    <p>Основной соус:</p>

    <BuilderSauceSelectorItem
      v-for="(sauce, index) in saucesList"
      :sauce="sauce"
      :key="sauce.name"
      :checked="index === 0"
    />
  </div>
</template>

<script>
import BuilderSauceSelectorItem from '@/modules/builder/components/BuilderIngredients/BuilderSauceSelector/BuilderSauceSelectorItem';

export default {
  name: 'BuilderSauceSelector',
  components: { BuilderSauceSelectorItem },
  computed: {
    saucesList() {
      return this.$store.state.builder.sauceData;
    }
  }
};
</script>

<style scoped lang="scss"></style>
