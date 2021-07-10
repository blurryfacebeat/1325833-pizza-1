<template>
  <div class="ingridients__sauce">
    <p>Основной соус:</p>

    <BuilderSauceSelectorItem
      v-for="(sauce, index) in sauceData"
      :sauce="sauce"
      :key="sauce.name"
      :checked="index === 0"
      @setPizzaSauce="setPizzaSauce"
    />
  </div>
</template>

<script>
import BuilderSauceSelectorItem from '@/modules/builder/components/BuilderIngredients/BuilderSauceSelector/BuilderSauceSelectorItem';

export default {
  name: 'BuilderSauceSelector',
  components: { BuilderSauceSelectorItem },
  props: {
    sauceData: {
      type: Array,
      require: true,
      validator: (v) => v.length
    }
  },
  methods: {
    setPizzaSauce(value) {
      this.$emit('setPizzaSauce', value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
