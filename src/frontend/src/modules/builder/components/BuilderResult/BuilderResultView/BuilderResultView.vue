<template>
  <AppDrop @onDrop="setIngredientByDrop">
    <div class="content__constructor">
      <div
        :class="`pizza pizza--foundation--${pizzaResult.dough.size}-${pizzaResult.sauce.value}`"
      >
        <div class="pizza__wrapper">
          <BuilderResultFillingItem
            v-for="ingredient in ingredientsArray"
            :key="`${ingredient.type}_${ingredient.counter}`"
            :ingredient="ingredient"
          />
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from '@/common/components/AppDrop';
import { eventBus } from '@/main';
import BuilderResultFillingItem from '@/modules/builder/components/BuilderResult/BuilderResultView/BuilderResultFillingItem';

export default {
  name: 'BuilderResultView',
  components: { BuilderResultFillingItem, AppDrop },
  methods: {
    setIngredientByDrop(value) {
      eventBus.$emit('setIngredientByDrop', JSON.parse(value));
    }
  },
  computed: {
    pizzaResult() {
      return this.$store.state.builder.pizzaResult;
    },
    ingredientsArray() {
      let ingredientsArray = [];
      for (let key in this.pizzaResult.ingredients) {
        for (let i = 0; i < this.pizzaResult.ingredients[key].counter; i++) {
          ingredientsArray.push({
            ...this.pizzaResult.ingredients[key],
            counter: i + 1
          });
        }
      }
      return ingredientsArray;
    }
  }
};
</script>

<style scoped lang="scss"></style>
